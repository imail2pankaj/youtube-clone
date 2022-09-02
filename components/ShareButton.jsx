import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { ReplyOutlinedIcon } from '../utils/icons'

const ShareButton = () => (
  <IconButton size="small" sx={{ marginRight: "10px;", color: '#000' }}>
    <ReplyOutlinedIcon fontSize="medium" />  <Typography marginLeft={1}>Share</Typography>
  </IconButton>
)

export default ShareButton