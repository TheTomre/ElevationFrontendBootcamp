import React, { useEffect } from 'react';
import { getCharacters } from '../store/slices/characters.slice';
import { useAppDispatch, useAppSelector } from '../store';
import './CharacterList.css';
import defaultPicture from '../assets/defaultPicture.png';
import CharacterDetail from './CharacterDetail';

const houseEmblems: { [key: string]: string } = {
  Ravenclaw: "https://www.pikpng.com/pngl/m/217-2174968_ravenclaw-sticker-harry-potter-house-crests-ravenclaw-clipart.png",
  Gryffindor: "https://www.pikpng.com/pngl/m/69-695204_gryffindor-sticker-harry-potter-gryffindor-png-clipart.png",
  Slytherin: "https://www.pikpng.com/pngl/m/221-2216119_slytherin-logo-clipart.png",
  Hufflepuff: "https://www.pikpng.com/pngl/m/135-1354026_hufflepuff-sticker-hufflepuff-png-clipart.png",
  default: "https://www.pikpng.com/pngl/m/9-96949_hogwarts-crest-by-geijvontaen-d665icx-hogwarts-crest-gryffindor.png",
};

const CharacterList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { characters, loading, error } = useAppSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-white">Error: {error}</p>;

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Character List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {characters.map((character) => {
            const house = character.attributes.house || 'default';
            return (
              <div key={character.id} className="flex bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="w-1/3 relative">
                  <img className="object-cover w-full h-full" src={character.attributes.image || defaultPicture} alt={character.attributes.name} />
                  <img
                    className="absolute top-2 right-2 w-14 h-14 rounded-full border-2 border-white"
                    src={houseEmblems[house] || houseEmblems.default}
                    alt={`${house} Emblem`}
                  />
                </div>
                <div className="w-2/3 p-4 text-gray-900 dark:text-white">
                  <h2 className="text-2xl font-semibold mb-2">{character.attributes.name}</h2>
                  <CharacterDetail label="House" value={character.attributes.house} isHouse={true} />
                  <CharacterDetail label="Species" value={character.attributes.species} />
                  <CharacterDetail label="Patronus" value={character.attributes.patronus} />
                  <CharacterDetail label="Wand" value={character.attributes.wand} />
                  <CharacterDetail label="Location" value={character.attributes.location?.name} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
