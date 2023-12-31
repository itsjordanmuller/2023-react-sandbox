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

// const RandomComponent = () => {
//   useEffect(() => {
//     console.log("What's going on here?");
//     const intId = setInterval(() => {
//       console.log("Hello from interval!");
//     }, 1000);
//     return () => {
//       clearInterval(intId);
//     };
//   }, []);
//   return <h1>hello there</h1>;
// };

const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm, this is interesting');
    const someFunc = () => {
      // some logic here
    };
    window.addEventListener("scroll", someFunc);
    return () => window.removeEventListener("scroll", someFunc);
  }, []);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
