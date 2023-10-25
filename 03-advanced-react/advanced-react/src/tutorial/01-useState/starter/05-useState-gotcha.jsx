import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
    console.log(value);
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
