import React from 'react';
import RepoItem from './RepoItem';

const Repo = ({ repos }) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id}></RepoItem>)
};

export default Repo;