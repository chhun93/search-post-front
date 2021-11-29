import React from "react";
import Nothing from "./Nothing";
import Item from "./Item";

const ItemList = ({ arr }) => {
  if (typeof arr !== "object") return <Nothing/>
  return (
    <div
      className="itemlist accordion accordion-flush"
      id="accordionFlushExample"
    >
      {arr.map((item) => (
        <Item key={item.key} id={item.id} state={item.state} />
      ))}
    </div>
  );
};

export default ItemList;

