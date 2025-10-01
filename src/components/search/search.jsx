import React, { useState } from "react";
import './search.css'
import SearchIcon from '@mui/icons-material/Search';

export const SearchComponent = ({ method, withSearch }) => {


  const [query, setQuery] = useState('');


  const handleSearch = () => {
    setQuery('');
    method(query);
  };



  return (
    <>
      {withSearch && (

        <div className="searchContainer">
          <input
            className="searchInput"
            type="text"
            placeholder=" Buscar ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
          />
          <button className="searchButton" onClick={handleSearch}>
            <SearchIcon style={{ fontSize: 40, color: 'grey' }} />
          </button>
        </div>
      )}
    </>
  );
};
