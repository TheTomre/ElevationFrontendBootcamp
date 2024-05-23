import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCharacters } from '../../services/potterApi';

interface CharacterAttributes {
  name: string;
  house?: string;
  species?: string;
  patronus?: string;
  wand?: string;
  gender?: string;
  image?: string;
  location?: {
    name: string;
  };
}

interface Character {
  id: string;
  attributes: CharacterAttributes;
}

interface CharactersState {
  characters: Character[];
  loading: boolean;
  error: string | null;
}

const initialState: CharactersState = {
  characters: [],
  loading: false,
  error: null,
};

export const getCharacters = createAsyncThunk('characters/getCharacters', async () => {
  const characters = await fetchCharacters();
  return characters;
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(getCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch characters';
      });
  },
});

export default charactersSlice.reducer;
