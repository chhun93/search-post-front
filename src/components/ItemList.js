import React from "react";
import Nothing from "./Nothing";
import Item from "./Item";

const ItemList = ({ arr }) => {
  if (typeof arr !== "object") return <Nothing />;
  console.log(arr);
  return (
    <div
      className="itemlist accordion accordion-flush"
      id="accordionFlushExample"
    >
      {arr.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ItemList;

