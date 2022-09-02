import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { PlaylistAddOutlinedIcon } from '../utils/icons'

const SaveButton = () => (
  <IconButton size="small" sx={{ color: '#000' }}>
    <PlaylistAddOutlinedIcon fontSize="medium" /> <Typography marginLeft={1}>Save</Typography>
  </IconButton>
)

export default SaveButton