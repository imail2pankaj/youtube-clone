import { Box, Button, IconButton, TextField } from '@mui/material'
import React from 'react'
import { SearchIcon } from '../utils/icons'

const SearchBar = () => {
  return (
    <Box sx={{ display: "flex", alignItems: 'center', position: 'relative' }}>
      <TextField size="small" sx={{ display: { xs: "none", sm: "block" } }} type="search" placeholder='Search...' />
      <Button sx={{ display: { xs: "none", sm: "inherit" }, borderRadius: "0", borderColor: "#CCCCCC" }} variant='outlined'><SearchIcon /></Button>
      <IconButton sx={{ display: { sm: "none" } }} color="primary" aria-label="add to shopping cart">
        <SearchIcon />
      </IconButton>
    </Box>
  )
}

export default SearchBar