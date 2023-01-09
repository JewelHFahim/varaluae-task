import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <form className="search-box">
      <input
        className="search"
        type="text"
        placeholder="&#61442; Search a Term | Topic"
      />
    </form>
  );
};

export default Search;
