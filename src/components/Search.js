import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">
          운송장번호
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="0123456789"
          aria-describedby="inputGroup-sizing-lg"
        />
        <button
          className="btn btn-outline-success"
          type="button"
          id="button-addon2"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Search;

