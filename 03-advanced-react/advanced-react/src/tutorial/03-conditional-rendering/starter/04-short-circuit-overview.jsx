import { useState } from "react";

const ShortCircuitOverview = () => {
  // Truthy
  const [name, setName] = useState("jordan");

  // Falsy
  const [text, setText] = useState("");

  const codeExample = text || "hello world";

  return (
    <>
      <h2>short circuit overview</h2>
      <div>
        {/* { if(someCondition){"wont work"}} */}
        <h4>Falsy OR: {text || "hello world"}</h4>
        <h4>Falsy AND: {text && "hello world"}</h4>
        <h4>Truthy OR: {name || "hello world"}</h4>
        <h4>Truthy AND: {name && "hello world"}</h4>
        <br />
        <h4>{codeExample}</h4>
      </div>
    </>
  );
};
export default ShortCircuitOverview;
