import { useState, useEffect } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <h2>cleanup function</h2>
      <button onClick={() => setToggle(!toggle)} className="btn">
        Toggle
      </button>
      {toggle && <RandomComponent />}
    </>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("What's going on here?");
  }, []);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
