import { data } from "../../../data";
import React from "react";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    console.log(id);
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        // console.log(person);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Delete Item
            </button>
          </div>
        );
      })}
      <button
        type="button"
        onClick={clearAllItems}
        style={{ marginTop: "2rem" }}
        className="btn"
      >
        Clear All Items
      </button>
    </div>
  );
};

export default UseStateArray;
