import { useState } from "react";
// import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState(1));
  // const value = useState("hello")[0];
  // const func = useState("hello")[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);
  // No Longer Necessary, but Can Be Seen:
  // const [name, setName] = React.useState();

  const increaseCount = () => {
    setCount(count + 1);
    // setCount("pants");
  };

  return (
    <>
      <h2>useState basics</h2>
      <h3>Count: {count}</h3>
      <button type="button" onClick={increaseCount}>
        Increase
      </button>
    </>
  );
};

export default UseStateBasics;
