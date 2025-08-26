import React from "react";
import './search.css'
import SearchIcon from '@mui/icons-material/Search';

export const SearchComponent = () => {
  return (
    <div className="searchContainer">
      <input className="searchInput" type="text" placeholder=" Buscar ..." />
      <button className="searchButton">
        <SearchIcon style={{ fontSize: 40, color: 'grey' }} />
      </button>
    </div>
  );
};
