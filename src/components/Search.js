import React from "react";
import "../styles/Search.css";

const Search = ({ searchHandleSubmit }) => {
  return (
    <div className="search">
      <form className="searchBox" onSubmit={searchHandleSubmit}>
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-lg">
            운송장 번호
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="-를 제외한 숫자만 입력"
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

