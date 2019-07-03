import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Search = ({ search, text }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
  };

  return (
    <form className="search">
      <Paper className='root'>
      <InputBase
        className='input'
        placeholder="Pesquisar..."
        inputProps={{ 'aria-label': 'Pesquisar...' }}
        onChange={handleSearchInputChanges}
        defaultValue={text}
      />
      <IconButton className='iconButton' aria-label="Search" onClick={callSearchFunction} type="submit" value="SEARCH">
        <SearchIcon />
      </IconButton>
    </Paper>
    </form>
  );
};

export default Search;