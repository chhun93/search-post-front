import React from "react";
import Item from "./Item";

const ItemList = ({ arr }) => {
  if(arr){
    
  }
  return (
    <div className="itemlist accordion accordion-flush" id="accordionFlushExample">
      {arr.map((item) => (
        <Item key={item.key} id={item.id} state={item.state} />
      ))}
    </div>
  );
};

export default ItemList;
