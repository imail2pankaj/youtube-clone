import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { ThumbUpOutlinedIcon } from '../utils/icons'

const LikeButton = ({ likeCount }) => (
  <IconButton size="small" sx={{ marginRight: "10px;", color: '#000' }}>
    <ThumbUpOutlinedIcon fontSize="medium" /> <Typography marginLeft={1}>{likeCount}</Typography>
  </IconButton>
)

export default LikeButton