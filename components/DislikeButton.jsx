import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { ThumbDownOutlinedIcon } from '../utils/icons'

const DislikeButton = () => (
  <IconButton size="small" sx={{ marginRight: "10px;", color: '#000' }}>
    <ThumbDownOutlinedIcon fontSize="medium" /> <Typography marginLeft={1}>Dislike</Typography>
  </IconButton>
)

export default DislikeButton