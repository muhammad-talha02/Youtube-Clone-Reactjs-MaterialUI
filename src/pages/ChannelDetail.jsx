import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "../utils";
import { fetchFromAPi } from "../utils/fetchApi";
const ChannelDetail = () => {
  const [channel, setChannel] = useState();
  const [channelDetails, setChannelDetails] = useState([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetchFromAPi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannel(data?.items[0]);
    });
    fetchFromAPi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setChannelDetails(data?.items);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channel} marginTop="-118px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={channelDetails} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
