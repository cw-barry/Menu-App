import React from 'react';

const Categories = ({ categories, handleFilter }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => (
        <button
          key={index}
          type="button"
          className="filter-btn"
          onClick={() => handleFilter(categories[index])}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
