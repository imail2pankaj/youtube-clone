import { Box, Stack } from '@mui/material';
import React from 'react'
import { Navbar, Sidebar } from './';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Stack
      direction="column"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", sm: "95%" },
        flexDirection: { sm: "row" },
        marginY: { xs: "10px" }
      }}
    >
      <Sidebar />
      <Box padding={2}>
        {children}
      </Box>
    </Stack>
  </>
)

export default Layout