import React from "react";

const Item = ({ id, state }) => {
  return (
    <div className="item accordion-item">
      <h2 className="accordion-header" id={"flush-headingOne-" + id}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#flush-collapseOne-" + id}
          aria-expanded="false"
          aria-controls={"flush-collapseOne-" + id}
        >
          {id}
          {"   "}
          {state}
        </button>
      </h2>

      <div
        id={"flush-collapseOne-" + id}
        className="accordion-collapse collapse"
        aria-labelledby={"flush-headingOne-" + id}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body">
          Placeholder content for this accordion, which is intended to
          demonstrate the <code>.accordion-flush</code> class. This is the first
          item's accordion body.
        </div>
      </div>
    </div>
  );
};

export default Item;

