import React, { useState } from 'react';
import { Category, Videos } from './index';

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState('빠니보틀');
  return (
    <main id="main">
      <aside id="aside">
        <Category
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>{selectCategory} 유튜브</h2>
        <Videos />
      </section>
    </main>
  );
};

export default MainConts;
