// Import React & ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// Create a Component with a Function that Returns HTML
// function Greeting() {
//   return (
//     // Wrap h2 heading with div for createElement demonstration
//     <div>
//       <h2>My First Component</h2>
//     </div>
//   );
// }

// Use createElement method that is being called under the hood
function Greeting() {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Hello World!")
  );
}

// Create a Root with ReactDOM on the Element with ID of root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the Greeting Component Using root.render(<Component-Name />)
root.render(<Greeting />);
