import React, { useState } from "react";
import Search from "./Search";
import ItemList from "./ItemList";

function Body() {
  const [deliveryNo, setDeliveryNo] = useState("");
  const [deliveryItem, setDeliveryItem] = useState("");

  const searchHandleChange = (e) => {
    setDeliveryNo(e.target.value);
  };

  const searchHandleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (deliveryNo && 0 < String(deliveryNo).length) {
      console.log(deliveryNo);
      fetch(`/lists/${deliveryNo}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          console.log("받은 데이터 : ", data);
          return setDeliveryItem(data);
        });
    }
  };

  return (
    <div>
      <Search
        searchHandleSubmit={searchHandleSubmit}
        searchHandleChange={searchHandleChange}
      />
      <ItemList arr={deliveryItem} />
    </div>
  );
}

export default Body;

