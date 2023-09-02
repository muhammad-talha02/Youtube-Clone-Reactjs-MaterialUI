import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { fetchFromAPi } from "../utils/fetchApi";
import { Videos } from "../utils";
const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [videos, setVideos] = useState();
  useEffect(() => {
    fetchFromAPi(`videos?id=${id}&part=snippet`).then((data) => {
      setVideo(data.items[0]);
    });
    fetchFromAPi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);
  if (!video?.snippet) return "Loading....";
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = video;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ sm: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" variant="h5" p={2} fontWeight="bold">
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  color="#fff"
                  variant={{ xs: "subtitle1", md: "h6" }}
                >
                  {channelTitle}
                </Typography>
                <CheckCircle sx={{ ml: "5px", fontSize: 12, color: "gray" }} />
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      <Box
        px={2}
        py={{ md: 1, xs: 5 }}
        justifyContent="center"
        alignItems="center"
      >
        <Videos videos={videos} direction="column" />
      </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
