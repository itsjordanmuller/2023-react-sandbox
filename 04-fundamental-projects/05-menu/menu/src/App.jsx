import { useState } from "react";
import menu from "./data";
import Title from "./Title";
import Menu from "./Menu";

// Long Way of Getting Unique Categories Using Set
// const tempCategories = menu.map((item) => item.category);
// const tempSet = new Set(tempCategories);
// const tempItems = ["all", ...tempSet];
// console.log(tempItems);

// Short/One Line Way of Getting Unique Categories Using Set
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
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
