import React from 'react';

const SearchBar = (props)=> {
    return (
        <form onSubmit={props.handleSubmit} >
            <input type="text" className="searchbar" autoFocus='true' placeholder="input todo items here" onChange={props.handleInput} value={props.searchInput} />
            <a href="javascript:void(0)" className="submitbutton" onClick={props.handleSubmit}>ADD ITEM</a>
        </form>
    );
}

export default SearchBar;