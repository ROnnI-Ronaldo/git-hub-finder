import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinners from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext)

    if(githubContext.loading) {
        return <Spinners />
    }else {        
        return (
            <div style={userStyle}>
                {githubContext.users.map(user => (
                    <UserItem user={user} key={user.login} />
                ))}
            </div>
        );
    }


}

const userStyle = {
    display : 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}



export default Users;