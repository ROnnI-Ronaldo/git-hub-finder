import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const alertContext = useContext(AlertContext);
    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('')

    //on change event to set the state with the value of input field
    const onChange = (e) => {
        setText( e.target.value)
    };
    //on submit event for submiting form
    const onSubmit = (e) => {
        e.preventDefault();
        if(text === '') {
            alertContext.setAlert('Please enter something', 'light')
        }else{
            githubContext.searchUser(text)
            setText('')
        }
    };
    
    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search Users..." value = {text} onChange={onChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0  && <input type="button" onClick={githubContext.clearUsers} value="clear" className="btn btn-light btn-block"/> }
            
        </div>
    );
}

export default Search;
    

        
