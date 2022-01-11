import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ handleChange, placeholder, type }) => {
  return (
    <div>
      <input
        className="search"
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default SearchBox;
