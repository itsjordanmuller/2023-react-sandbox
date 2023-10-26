import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  // Will Not Allow User to Click 5x in 3s to Get +5
  // setTimeout(() => {
  //   setValue(value + 1);
  // }, 3000);

  // A Way Around setTimeout Edge Case
  const handleClick = () => {
    setTimeout(() => {
      console.log("clicked the button!");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);

    // setValue(value + 1);
    // setValue((currentState) => {
    //   const newState = currentState + 1;
    //   console.log(newState);
    //   return newState;
    // });
    // console.log(value);
  };
  return (
    <div>
      <h2>useState "gotcha"</h2>
      <h3>{value}</h3>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
