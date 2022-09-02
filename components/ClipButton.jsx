import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { ContentCutOutlinedIcon } from '../utils/icons'

const ClipButton = () => (
  <IconButton size="small" sx={{ marginRight: "10px;", color: '#000' }}>
    <ContentCutOutlinedIcon fontSize="medium" />  <Typography marginLeft={1}>Clip</Typography>
  </IconButton>
)

export default ClipButton