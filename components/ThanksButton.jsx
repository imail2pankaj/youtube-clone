import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { FavoriteBorderOutlinedIcon } from '../utils/icons'

const ThanksButton = () => (
  <IconButton size="small" sx={{ marginRight: "10px;", color: '#000' }}>
    <FavoriteBorderOutlinedIcon fontSize="medium" />  <Typography marginLeft={1}>Thanks</Typography>
  </IconButton>
)

export default ThanksButton