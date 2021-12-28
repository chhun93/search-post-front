import React from "react";

const Info = (props) => {
  var info = props.info;
  return (
    <div>
      <p>
        {info.state}
        <br />
      </p>
      <table class="container">
        <div class="row">
          <div class="col">Column</div>
          <div class="col">Column</div>
          <div class="col">Column</div>
        </div>
      </table>
    </div>
  );
};

export default Info;

