import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'

import { MenuIcon } from '../utils/icons';

import logo from '../assets/images/logo.png';

const LogoBar = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <MenuIcon sx={{ marginRight: "10px" }} />
      <Image src={logo} alt="Logo" width={110} height="48" />
    </Box>
  )
}

export default LogoBar