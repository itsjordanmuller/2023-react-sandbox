import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("programming");

  const displayPerson = () => {
    setName("john");
    setAge(28);
    setHobby("reading");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoys: {hobby}</h4>
      <button className="btn" type="button" onClick={displayPerson}>
        Cycle
      </button>
    </>
  );
};

export default UseStateObject;
