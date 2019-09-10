import React from 'react';

const RepoItem = ({repo}) => {
    return (
        <div className="card">
            <ul>
                <li>
                    <a href={repo.html_url} >{repo.name}</a>
                </li>
            </ul>
        </div>
    );
};

export default RepoItem;