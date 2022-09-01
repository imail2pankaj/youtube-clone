import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { Layout as MainLayout, VideoCard } from '../../components'
import { getData } from '../../services/api'
import { Box, Grid, Stack } from '@mui/material';
import ReactPlayer from 'react-player'
import Image from 'next/image';

const VideoDetails = () => {
  const router = useRouter();
  const { videoId } = router.query;

  const [videoDetails, setVideoDetails] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState(null);

  useEffect(() => {
    getData(`videos?part=contentDetails,snippet,statistics&id=${videoId}`).then(resp => setVideoDetails(resp[0] || null));
    getData(`search?part=snippet&id=${videoId}&type=video`).then(resp => setSuggestedVideos(resp || null));
  }, [videoId]);

  return (
    <MainLayout>
      {videoId && (
        <Box minHeight="95vh" sx={{ width: "100%" }}>
          <Stack direction={{ xs: "column", md: "row" }}>
            <Box flex={1}>
              <Box sx={{ width: "800px", position: "sticky" }}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} className="react-player" controls />
              </Box>
            </Box>
            <Box px={2} justifyContent="center" alignItems="center" >
              {suggestedVideos && suggestedVideos.map(video => (
                <VideoCard video={video} marginBottom="10px" />
              ))}
            </Box>
          </Stack>
        </Box>
      )}
    </MainLayout>
  )
}

export default VideoDetails
