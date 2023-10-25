import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "programming",
  });

  const displayPerson = () => {
    // setPerson({ name: "john", age: 28, hobby: "reading" });

    // Will Cause Error/Not Send Object
    // setPerson("Hello World!")

    // Will Send Object with No Age or Hobby
    // setPerson({ name: "susan" })

    //
    setPerson({ ...person, name: "susan" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className="btn" type="button" onClick={displayPerson}>
        Cycle
      </button>
    </>
  );
};

export default UseStateObject;
