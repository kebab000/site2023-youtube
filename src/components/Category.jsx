import React from 'react';
import { categories } from '../utils/contents';
const Category = ({ selectCategory, setSelectCategory }) => {
  return (
    <div className="category__list">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
          style={{
            backgroundColor:
              category.name === selectCategory ? '#646464' : 'transparent',
          }}
        >
          <span className="icon">{category.icon}</span>
          <span className="name">{category.name}</span>
        </button>
      ))}
    </div>
  );
};
export default Category;
