import { useState } from "react";
import menu from "./data";
import Title from "./Title";
import Menu from "./Menu";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
