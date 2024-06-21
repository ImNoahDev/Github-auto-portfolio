import React from 'react';

const RepoItem = ({ repo }) => {
  const openGraphImageUrl = `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`;
  const repoUrl = `https://github.com/${repo.owner.login}/${repo.name}`;

  return (
    <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="block no-underline">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105 inline-block w-full max-w-sm">
        <img
          src={openGraphImageUrl}
          alt={`${repo.name} thumbnail`}
          className="w-full h-auto object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 text-black dark:text-white">{repo.name}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">{repo.description}</p>
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            <p>Last updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
            <p>⭐ {repo.stargazers_count}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RepoItem;