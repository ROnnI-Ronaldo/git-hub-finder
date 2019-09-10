import React, { Fragment, useEffect, useContext } from 'react';
import Repo from '../repos/Repo';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext)

    const { user, loading, getUser, repos, getUserRipos } = githubContext;

    useEffect(() => {
        getUser(match.params.login)
        getUserRipos(match.params.login)

        //eslint-disable-next-line
    }, []);

        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
        } = user;

        if(loading) {
            return <Spinner />
        }

        return (
            <Fragment>
                <Link to="/" className="btn btn-light">Back to Search</Link>
                Hirable: {' '}
                {hireable ? <Fragment>
                    <i className="fas fa-check text-success" />
                </Fragment> : <i className="fas fa-times-circle text-danger" />}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="" className="round-img" style={{width: '150px'}} />
                    <h1>{name}</h1>
                    <p>{location}</p>
                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </Fragment>}
                        <a href={html_url} className="btn btn-dark" >Visit Github Profile</a>
                        <ul>
                            <li>{login && <strong>Login: {login}</strong>}</li>
                            <li>{company && <strong>Company: {company}</strong>}</li>
                            <li>{blog && <strong>Webside: {blog}</strong>}</li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary"> Folowers: {followers}</div>
                    <div className="badge badge-success"> Following: {following}</div>
                    <div className="badge badge-light"> Public Repos: {public_repos}</div>
                    <div className="badge badge-primary"> Public Gists: {public_gists}</div>
                </div>
                <Repo repos={repos} />
            </Fragment>
        );
    
}


export default User;