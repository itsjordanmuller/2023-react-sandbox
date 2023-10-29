import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";

const App = () => {
  const [colors, setColors] = useState(new Values("#8e44ad").all(10));

  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;
