import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { ClipButton, DislikeButton, Layout as MainLayout, LikeButton, SaveButton, ShareButton, ThanksButton, VideoCard } from '../../components'
import { getData } from '../../services/api'
import { Box, IconButton, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player'
import moment from 'moment';
import { ContentCutOutlinedIcon, FavoriteBorderOutlinedIcon, PlaylistAddOutlinedIcon, ReplyOutlinedIcon, ThumbDownOutlinedIcon, ThumbUpOutlinedIcon } from '../../utils/icons';
// import Image from 'next/image';

const VideoDetails = () => {
  const router = useRouter();
  const { videoId } = router.query;

  const [videoDetails, setVideoDetails] = useState(null);
  const [suggestedVideos, setSuggestedVideos] = useState(null);

  useEffect(() => {
    getData(`videos?part=contentDetails,snippet,statistics&id=${videoId}`).then(resp => setVideoDetails(resp[0] || null));
    getData(`search?part=snippet&relatedToVideoId=${videoId}&type=video`).then(resp => setSuggestedVideos(resp || null));
  }, [videoId]);

  return (
    <MainLayout>
      {videoId && (
        <Box minHeight="95vh" sx={{ width: "100%" }}>
          <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between">
            <Box flex={1}>
              <Box sx={{ width: "800px", position: "sticky" }}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} className="react-player" controls />
                <Typography variant="h1" fontSize="20px" marginTop={"20px"}>
                  {videoDetails?.snippet?.title}
                  {/* Hiroshima and Nagasaki | Why USA destroyed Japan? | WW2 | Dhruv Rathee */}
                </Typography>
                <Box borderBottom={"1px #DEDEDE solid"}>
                  <Stack
                    direction={'row'}
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={2}
                    py={2}

                  >
                    <Box>
                      <Typography color={"gray"}>{addSeperator(videoDetails?.statistics?.viewCount || 0)} views | {moment(videoDetails?.snippet?.publishedAt).format("DD MMM YYYY")}</Typography>
                    </Box>
                    <Box>
                      <LikeButton likeCount={videoDetails?.statistics?.likeCount || 0} />
                      <DislikeButton />
                      <ShareButton />
                      <ThanksButton />
                      <ClipButton />
                      <SaveButton />
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
            <Box px={2} justifyContent="center" alignItems="center" >
              {suggestedVideos && suggestedVideos.map(video => (
                <VideoCard video={video} key={video.id.videoId} marginBottom="10px" />
              ))}
            </Box>
          </Stack>
        </Box>
      )}
    </MainLayout>
  )
}
function addSeperator(nStr) {
  nStr += '';
  let x = nStr.split('.');
  let x1 = x[0];
  let x2 = x.length > 1 ? '.' + x[1] : '';
  let rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}
export default VideoDetails
