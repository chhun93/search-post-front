import React from "react";
import Search from "./Search";
import ItemList from "./ItemList";

const Body = () => {
  return (
    <div>
      <Search />
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

