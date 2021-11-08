import React from "react";
import Item from "./Item";

const ItemList = ({ arr }) => {
  return (
    <ul className="itemlist">
      {arr.map((item) => (
        <Item key={item.key} id={item.id} state={item.state} />
      ))}
    </ul>
  );
};

export default ItemList;

