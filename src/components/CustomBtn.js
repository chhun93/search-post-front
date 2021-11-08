import React from "react";

const CustomBtn = ({func, value}) => {
  return (<input type="button" onClick={func} value={value}/>);
};

export default CustomBtn;

