import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const Sidebar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map(item => (
        <button className="category-btn">
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar