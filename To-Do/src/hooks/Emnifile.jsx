import React, { useEffect } from "react";

const Emnifile = ({ todos }) => {
  useEffect(() => {
    console.log("I am UseEffect", todos);
  }, [todos]);
  return <div></div>;
};

export default Emnifile;
