import React from 'react';
import CharacterList from './components/CharacterList';
import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">World of Harry Potter</h1>
        <ThemeSwitcher />
      </header>
      <main className="p-4">
        <CharacterList />
      </main>
    </div>
  );
};

export default App;
