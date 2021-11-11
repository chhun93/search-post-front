import React, { useState } from "react";
import Search from "./Search";
import ItemList from "./ItemList";

const Body = () => {
  const [deliveryNo, setDeliveryNo] = useState("");

  const searchHandleChange = (e) => {
    setDeliveryNo(e.target.value);
  };

  const searchHandleSubmit = (e) => {
    e.preventDefault();
    if (deliveryNo && 0 < String(deliveryNo).length) {
      console.log(deliveryNo);
    }
  };

  return (
    <div>
      <Search
        searchHandleSubmit={searchHandleSubmit}
        searchHandleChange={searchHandleChange}
      />
      <ItemList
        arr={[
          { key: "0", id: "cu", state: "ready" },
          { key: "1", id: "cj", state: "..." },
        ]}
      />
    </div>
  );
};

export default Body;

