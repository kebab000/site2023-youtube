import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillYoutube } from 'react-icons/ai';
import { SearchBar } from './index';

const HeaderConts = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <AiFillYoutube className="icon" />
          Kebabs Youtube List
        </Link>
      </h1>
      <SearchBar/>
    </header>
  );
};

export default HeaderConts;
