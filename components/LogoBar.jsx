import { Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { MenuIcon } from '../utils/icons';

import logo from '../assets/images/logo.png';

const LogoBar = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <MenuIcon sx={{ marginRight: "10px" }} />
      <Link href="/">
        <Image src={logo} alt="Logo" width={40} height="40" />
      </Link>
    </Box>
  )
}

export default LogoBar