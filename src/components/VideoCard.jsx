import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constant";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
          image={snippet?.thumbnails?.high?.url}
          title="video Thumbnail"
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "100px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="h3"
            fontWeight="bold"
            color="white"
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            gutterBottom
            variant="subtitle2"
            component="h3"
            fontWeight="bold"
            color="gray"
          >
            {snippet?.channelTitle.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ ml: "5px", fontSize: 12 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
