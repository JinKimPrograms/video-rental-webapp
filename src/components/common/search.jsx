import React from "react";

const Search = ({ onChange, value }) => {
  return (
    <form>
      <div className="form-group">
        <input
          value={value}
          onChange={onChange}
          className="form-control"
          placeholder="Search..."
        />
      </div>
    </form>
  );
};

export default Search;
