import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "../utils";
import { fetchFromAPi } from "../utils/fetchApi";
// import "../utils/fetchApi"
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("new");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
      console.log(data.items)
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "95%" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography variant="body2" mt={1.5} color="white">
          Copyright @2023. MT Media
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} color="white">
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
