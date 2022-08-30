import { Card, CardMedia } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const VideoCard = ({ video: { snippet } }) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '308px', md: "287px", }, boxShadow: "none", borderRadius: 0 }}>
      <Link href="/about">
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '308px' }, height: 170 }}
        />
      </Link>
    </Card>
  )
}

export default VideoCard