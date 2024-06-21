import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RepoItem from './RepoItem';

const RepoList = () => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/USERNAME/repos');
      setRepos(response.data);
    } catch (error) {
      console.error('Error fetching repos', error);
    }
  };

  useEffect(() => {
    fetchRepos();
    const intervalId = setInterval(fetchRepos, 300000); // 300000 ms = 5 minutes
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="space-y-4">
      {repos.map(repo => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
