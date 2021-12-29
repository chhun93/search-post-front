import React from "react";

const Info = (props) => {
  var info = props.info.state;
  return (
    <div className="row">
      <div className="col">{info.substr(0, info.indexOf(" "))}</div>
      <div className="col">
        {info.substr(
          info.indexOf(" ") + 1,
          info.indexOf("-") - info.indexOf(" ") - 1
        )}
      </div>
      <div className="col">{info.substr(info.indexOf("-") + 1)}</div>
    </div>
  );
};

export default Info;

