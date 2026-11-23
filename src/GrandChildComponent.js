import React from "react";

const GrandChildComponent = (props) => {
  console.log(props);
  return <div>{props.myName.name}</div>;
};

export default GrandChildComponent;
