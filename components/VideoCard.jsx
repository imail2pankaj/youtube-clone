import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { CheckCircleOutlineIcon } from '../utils/icons'

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <Card sx={{ width: { xs: '100%', sm: '308px', md: "287px", }, boxShadow: "none", borderRadius: 0 }}>
      <Link href={`video/${videoId}`}>
        <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '308px' }, height: 170, cursor: "pointer" }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#EFEFEF", height: '80px' }}>
        <Link href={`video/${videoId}`}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{ cursor: "pointer" }}
          >
            {snippet?.title.slice(0, 40)}...
          </Typography>
        </Link>
        <Link href={`channel/${snippet?.channelId}`}>
          <Typography variant="subtitle2" sx={{ cursor: "pointer" }}>
            {snippet?.channelTitle} {' '}
            <CheckCircleOutlineIcon sx={{ fontSize: "12px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard