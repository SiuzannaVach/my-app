import React, { useEffect } from "react";

const UnmountComponent = () => {
  useEffect(() => {
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);
  return <div>UnmountComponent</div>;
};

export default UnmountComponent;
