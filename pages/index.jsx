import { Box, Stack } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { Layout as MainLayout, VideoCard } from "../components"
import { getData } from "../services/api"
import LayoutContext from "../context/LayoutContext";

export default function Home() {
  const [feeds, setFeeds] = useState([]);

  const {category} = useContext(LayoutContext)

  useEffect(() => {
    getData(`search?part=snippet,id&maxResults=50&order=date&q=${category}`).then(resp => setFeeds(resp));
  }, [category])

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
