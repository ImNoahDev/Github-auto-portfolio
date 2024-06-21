import React from 'react';
import RepoList from './components/RepoList';
import './index.css';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My GitHub Repositories</h1>
      <RepoList />
    </div>
  );
};

export default App;
