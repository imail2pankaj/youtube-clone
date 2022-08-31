import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { Layout as MainLayout } from '../../components'
import { getData } from '../../services/api'

const VideoDetails = () => {
  const router = useRouter();
  const { videoId } = router.query;

  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    getData(`videos?part=contentDetails,snippet,statistics&id=${videoId}`).then(resp => setVideoDetails(resp[0] || null));
  }, [videoId]);

  return (
    <MainLayout>
      {videoDetails?.snippet?.title}
      {videoDetails?.snippet?.description}
    </MainLayout>
  )
}

export default VideoDetails