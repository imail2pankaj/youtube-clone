import { Box, Button } from '@mui/material'
import React from 'react'
import { SearchIcon } from '../utils/icons'

const SearchBar = () => {
  return (
    <Box sx={{ display: "flex", alignItems: 'center' }}>
      <input type="search" placeholder='Search...' className='search-input' />
      <Button sx={{ borderRadius: "0", borderColor: "#CCCCCC"}} variant='outlined'><SearchIcon /></Button>
    </Box>
  )
}

export default SearchBar