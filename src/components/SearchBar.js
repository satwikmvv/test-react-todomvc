import React from 'react';

const SearchBar = (props)=> {
    return (
        <form onSubmit={props.handleSubmit} >
            <input type="text" className="searchbar" autoFocus='true' placeholder="input todo items here" onChange={props.handleInput} value={props.searchInput} />
            <button>ADD ITEM</button>
        </form>
    );
}

export default SearchBar;