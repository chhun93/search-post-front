import React from "react";
import Info from "./Info";

const Item = (props) => {
  console.log(props);
  var receiveItem = props.item;
  var isDelivery = false;
  var itemInfo = JSON.parse(JSON.stringify(receiveItem));
  var deliveryInfoArr = [];

  if (0 > itemInfo.state.indexOf("READY")) {
    isDelivery = true;
    var deliveryInfoObj = JSON.parse(JSON.stringify(itemInfo.current));
    var idx = 0;
    for (var i in deliveryInfoObj) {
      deliveryInfoArr.push({ state: deliveryInfoObj[i], idx: idx++ });
    }
  }

  return (
    <div className="item accordion-item">
      <h2 className="accordion-header" id={"flush-headingOne-" + itemInfo.id}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#flush-collapseOne-" + itemInfo.id}
          aria-expanded="false"
          aria-controls={"flush-collapseOne-" + itemInfo.id}
        >
          {itemInfo.name}
          {"   "}
          {isDelivery ? "[배송중(배송 조회)]" : "[상품 준비중]"}
        </button>
      </h2>

      <div
        id={"flush-collapseOne-" + itemInfo.id}
        className="accordion-collapse collapse"
        aria-labelledby={"flush-headingOne-" + itemInfo.id}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body"></div>
        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col">시간</div>
            <div className="col">상태</div>
          </div>
          {deliveryInfoArr.map((info) => (
            <Info info={info} key={info.idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Item;

