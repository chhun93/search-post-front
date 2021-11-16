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
      fetch(`http://localhost:3030/lists/${deliveryNo}`)
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((res) => {
          console.log("받은 데이터 : ");
          console.log(res);
        });
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
          { key: "0", id: "cu", state: "READY" },
          { key: "1", id: "우체국", state: "READY" },
        ]}
      />
    </div>
  );
};

export default Body;
