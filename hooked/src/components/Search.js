import React, { useState } from "react";


const Search = (props) => {
    //start state as nothing
  const [searchValue, setSearchValue] = useState("");
  
  //set input of form as search value
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  //reset input field to empty after search is successful
  const resetInputField = () => {
    setSearchValue("")
  }

//use the value set to state in handleinputchhange and use it to search through the movies then call reset input
  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (

    //user search form
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;