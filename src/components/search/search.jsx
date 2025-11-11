import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import './search.css';
import React from 'react';
import { Button, Menu, Fade, MenuItem } from '@mui/material';
import { bookService } from '../../services/bookService';



export const SearchComponent = ({ findByText, withFilter, findByFilter }) => {
  const [query, setQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [genres, setGenres] = useState([]);

  const handleSearch = () => {
    findByText(query);
    setQuery('');
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGenreClick = (genre) => {
    if (findByFilter) {
      findByFilter(genre); // Envía el género seleccionado
    }
    handleClose();
  };



  useEffect(() => {
    const fetchGenres = async () => {
      const genres = await bookService.getGeneres();
      setGenres(genres);
    };
    fetchGenres();
  }, []);

  return (
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
      {withFilter && (
        <>
          <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
              height: '5rem',
              backgroundColor: 'aliceblue',
              width: '12rem',
              padding: 0,
              margin: 0,
              borderTopRightRadius: '2rem',
              color: 'black',
              fontSize: '1rem',
            }}
          >
            Categoría
          </Button>
          <Menu
            id="fade-menu"
            slotProps={{
              list: {
                'aria-labelledby': 'fade-button',
              },
            }}
            TransitionComponent={Fade}
            anchorEl={anchorEl}
            open={open}
            sx={{
              '& .MuiMenuItem-root': {
                width: '12rem',
              },
            }}
            onClose={handleClose}
          >
            {genres.map((genre) => (
              <MenuItem
                key={genre}
                sx={{ height: '4rem' }}
                onClick={() => handleGenreClick(genre)}
              >
                {genre}
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </div>
  );
};