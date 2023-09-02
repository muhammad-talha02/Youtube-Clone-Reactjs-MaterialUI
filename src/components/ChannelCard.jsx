import { Link } from "react-router-dom";
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoProfilePicture,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelTitle
} from "../utils/constant";
const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
    sx={{boxShadow:"none",
    borderRadius:"20px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:{xs:"356px", md:"320px"},
    height:"326px",
    margin:"auto",
    marginTop
    }}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solide #e3e3e3",
            }}
          />
          <Typography
            gutterBottom
            variant="subtitle2"
            component="h3"
            fontWeight="bold"
            color="gray"
          >
            {channelDetail?.snippet?.title.slice(0, 60) ||
              demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ ml: "5px", fontSize: 12 }} />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
