import {
    SEARCH_USERS,
    SET_LODAING,
    CLEAR_USER,
    GET_USER,
    GET_REPOS
} from '../types';

export default (state, action) => {
    switch (action.type){
        case SEARCH_USERS : 
            return {
                ...state,
                users: action.payLoad,
                lodaing: false
            };
        case GET_REPOS : 
            return {
                ...state,
                repos: action.payload,
                loading: false
            }
        case GET_USER :
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case CLEAR_USER : 
            return {
                ...state,
                users: [],
                lodaing:false
            }
        case SET_LODAING : 
            return {
                ...state,
                lodaing: true
            }
        default: return state
    }
}