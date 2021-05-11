import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const AllCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const handleFilterMenu = (category) => {
    if (category === "all") {
      return setMenuItems(items);
    }
    setMenuItems(() => {
      const newCategory = items.filter(
        (menuItem) => menuItem.category === category
      );
      return newCategory;
    });
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          AllCategories={AllCategories}
          handleFilterMenu={handleFilterMenu}
        />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
