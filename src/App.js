import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import data from './data';

// const categories = ['all', 'breakfast', 'lunch', 'shakes'];

const categories = data.reduce(
  (acc, item) => {
    if (!acc.includes(item.category)) acc.push(item.category);
    return acc;
  },
  ['all']
);

function App() {
  const [menu, setMenu] = useState(data);

  const handleFilter = (selected) => {
    if (selected === 'all') setMenu(data);
    else {
      const newMenu = data.filter((item) => item.category === selected);
      setMenu(newMenu);
    }
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} handleFilter={handleFilter} />
        <Menu data={menu} />
      </section>
    </main>
  );
}

export default App;
