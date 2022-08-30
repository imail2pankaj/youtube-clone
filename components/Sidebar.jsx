import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const Sidebar = () => {
  return (
    <Stack
    direction="row"
      sx={{
        overflowY: "auto",
        flexDirection: { sm: "column" },
        width: { xs: "100%", sm: "120px" },
        minWidth: { sm: "120px" },
      }}
    >
      {categories.map(item => (
        <button key={item.name} className="category-btn">
          <span>{item.icon}</span>
          <Box sx={{ml:"10px"}}>{item.name}</Box>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar