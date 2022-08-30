import { IconButton, Stack } from '@mui/material'
import React from 'react'

import { AccountCircleOutlinedIcon, NotificationsOutlinedIcon, VideoCallOutlinedIcon } from '../utils/icons';

const NavigationMenu = () => {
  return (
    <Stack direction='row' spacing={2}>
      <IconButton variant="text"><VideoCallOutlinedIcon /></IconButton>
      <IconButton variant="text"><NotificationsOutlinedIcon /></IconButton>
      <IconButton variant="text"><AccountCircleOutlinedIcon /></IconButton>
    </Stack>
  )
}

export default NavigationMenu