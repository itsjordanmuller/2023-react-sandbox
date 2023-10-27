import { useState } from "react";
import menu from "./data";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";

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

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
