import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillYoutube } from 'react-icons/ai';

const HeaderConts = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <AiFillYoutube className="icon" />
          Kebabs Youtube List
        </Link>
      </h1>
      <div className="search">
        <label className="glass" htmlFor=""></label>
        <input
          type="text"
          id="searchInput"
          className="input__search"
          placeholder="유튜브를 검색하세요"
          title="검색"
        />
      </div>
    </header>
  );
};

export default HeaderConts;
