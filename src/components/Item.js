import React from "react";
import Btn from "./CustomBtn";

const Item = ({ id, state }) => {
  return (
    <div className="item">
      <p>
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          {id}{"   "}{state}
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">COLLAPSE</div>
      </div>
    </div>
  );
};

export default Item;

