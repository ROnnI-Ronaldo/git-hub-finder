import React, { useReducer } from 'react';
import axios from 'axios';
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';
import {
    SEARCH_USERS,
    SET_LODAING,
    CLEAR_USER,
    GET_USER,
    GET_REPOS
} from '../types';

let githubClienId;
let githubClintSecret;

if(process.env.NODE_ENV !== 'production') {
    githubClienId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClintSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
}else {
    githubClienId = process.env.GITHUB_CLIENT_ID;
    githubClintSecret = process.env.GITHUB_CLIENT_SECRET
}

const GithubState = props => {

    const searchUser = async (text) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClienId}&client_secret=${githubClintSecret}`).catch(err => console.log(err));
        dispatch({
            type: SEARCH_USERS,
            payLoad: res.data.items
        });
        
    }

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //search users

    //get user
    const getUser = async (username) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClienId}&client_secret=${githubClintSecret}`).catch(err => console.log(err));
        dispatch({
            type: GET_USER,
            payload: res.data
        })
      };
    

    //get repos
    const getUserRipos = async (username) => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClienId}&client_secret=${githubClintSecret}`).catch(err => console.log(err));
        dispatch({
            type:GET_REPOS,
            payload: res.data
        });
      }

    //clear user
    const clearUsers = () => dispatch({ type: CLEAR_USER })

    //set lodaing
    const setLoading = () => dispatch({ type: SET_LODAING })

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            loading: state.loading,
            repos: state.repos,
            searchUser,
            clearUsers,
            getUser,
            getUserRipos
        }}
    >

        {props.children}
    </GithubContext.Provider>

}

export default GithubState