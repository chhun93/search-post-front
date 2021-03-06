import React, { useState } from "react";
import "../styles/Body.scss"
import Search from "./Search";
import ItemList from "./ItemList";

function Body() {
  const [deliveryItem, setDeliveryItem] = useState("");

  const searchHandleSubmit = (e) => {
    e.preventDefault();

    var deliveryNo = e.target[0].value;
    if (deliveryNo && 0 < String(deliveryNo).length) {
      fetch(`http://search-post.herokuapp.com/api/v1/post-man?tracking-number=${deliveryNo}`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          return setDeliveryItem(data);
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div className="body">
      <Search searchHandleSubmit={searchHandleSubmit} />
      <ItemList arr={deliveryItem} />
    </div>
  );
}

export default Body;

