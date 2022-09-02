import { Box, Stack } from '@mui/material'
import React, { useContext } from 'react'
import { categories } from '../utils/constants'
import LayoutContext from '../context/LayoutContext';
import { useRouter } from 'next/router';


const Sidebar = () => {
  const { category, setCategory } = useContext(LayoutContext);

  const router = useRouter();
  const { videoId } = router.query;

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        flexDirection: { sm: "column" },
        width: { xs: "100%", sm: "160px" },
        minWidth: { sm: "160px" },
      }}
    >
      {categories.map(item => (
        <button
          key={item.name}
          className={`category-btn`}
          style={{
            background: item.name === category && "#FC1503",
            color: item.name === category && "white"
          }}
          onClick={() => {
            setCategory(item.name);

            if (videoId) {
              router.push("/");
            }
          }}
        >
          <span>{item.icon}</span>
          <Box sx={{ ml: "10px" }}>{item.name}</Box>
        </button>
      ))}
    </Stack>
  )
}

export default Sidebar