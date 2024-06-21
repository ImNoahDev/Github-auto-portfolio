import React from 'react';
import RepoList from './components/RepoList';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-7xl p-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">My GitHub Repositories</h1>
        <RepoList />
      </div>
    </div>
  );
};

export default App;
