import React from "react";

const Search = ({ searchHandleChange, searchHandleSubmit }) => {
  return (
    <div className="search">
      <form className="searchBox" onSubmit={searchHandleSubmit}>
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            운송장번호
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="0123456789"
            aria-describedby="inputGroup-sizing-lg"
            onChange={searchHandleChange}
            pattern="\d*"
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            id="button-addon2"
          >
            확인
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
