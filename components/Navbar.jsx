import { Box } from '@mui/material'

import React from 'react'
import { LogoBar, SearchBar, NavigationMenu } from './'

const Navbar = () => (
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", borderBottom: "1px #F68B1F solid", py: 1, px: 3 }}>
    <LogoBar />
    <SearchBar />
    <NavigationMenu />
  </Box>
)

export default Navbar