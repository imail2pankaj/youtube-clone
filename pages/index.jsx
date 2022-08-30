import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Layout as MainLayout, VideoCard } from "../components"
import { getData } from "../services/api"

export default function Home() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getData(`search?order=date`).then(resp => setFeeds(resp));
  }, [])

  return (
    <MainLayout>
      <Box sx={{ width: "100%" }}>
        <Stack direction={"row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
          {feeds && feeds.map(item => (
            <VideoCard video={item} key={item?.id?.videoId} />
          ))}
        </Stack>
      </Box>
    </MainLayout>
  )
}
