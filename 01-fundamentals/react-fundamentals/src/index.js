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
// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "Hello World!")
//   );
// }

// function Greeting() {
//   return (
//     // Get Rid of Extra Div Using React.Fragment
//     // Can Also Use <> & </> for Shorthand
//     <>
//       <div>
//         <h3>Hello World!</h3>
//         <ul>
//           <li>
//             <a href="#">Hello</a>
//           </li>
//           <li>
//             <a href="#">World</a>
//           </li>
//         </ul>
//       </div>
//       {/* Cannot Create a Sibling to Parent Element // Must Have One Parent */}
//       <h2>Another Heading</h2>
//       {/* Self Closing Elements Must Have "/" Closing Tag */}
//       <input type="text" />
//     </>
//   );
// }

function Greeting() {
  // Must Have Return and Element on Same Line or Use Parenthesis
  // return <h2>Hello World!</h2>;

  // Can't Access Code on Line After Return
  // return;
  // <h2>Hello World!</h2>;

  // Must Use Parenthesis and React.Fragment to Return Code on Another Line/Multiple Lines
  return (
    <>
      <h2>Hello World!</h2>
      <p>Hello!</p>
    </>
  );
}

// Create a Root with ReactDOM on the Element with ID of root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the Greeting Component Using root.render(<Component-Name />)
root.render(<Greeting />);
