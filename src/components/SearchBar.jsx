import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch();
    }
  };
  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };
  return (
    <div className="search" onKeyPress={onKeyPress}>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="검색하세요"
        title="검색"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;