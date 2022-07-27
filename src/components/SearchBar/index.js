import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInput } from "../../reduxFt/userSlice";
import "./searchbar.css";

function Body() {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const submitSearch = (e) => {
    e.preventDefault();
    dispatch(setInput(inputValue));
  };

  return (
    <div>
      <form className="searchBar">
        <input
          className="searchInput"
          placeholder="Search Blog"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          disabled={!inputValue}
          className="submitBtn"
          onClick={submitSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Body;
