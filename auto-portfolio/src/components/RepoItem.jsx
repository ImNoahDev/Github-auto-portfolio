import React from 'react';

const RepoItem = ({ repo }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-bold">{repo.name}</h2>
      <p>{repo.description}</p>
      <p>Last updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
      <p>⭐ {repo.stargazers_count}</p>
    </div>
  );
};

export default RepoItem;
