import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { Typography, Box } from "@mui/material";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "black",
    height: 48,
    padding: "0 30px",
  },
});

export default function Landing() {
  const [info, setInfo] = useState<any>(null);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("https://randomuser.me/api");
      setInfo(response.data);
      console.log(info);
    };

    fetch();
  }, []);
  function refreshPage() {
    window.location.reload();

    // window.location.reload();
  }
  const classes = useStyles();
  return (
    <Box>
      <img
        src={info?.results[0].picture.large}
        alt=""
        width="386"
        height="386"
      />
      <Typography>codename:{info?.results[0].login.username}</Typography>

      <Typography>first name: {info?.results[0].name.first}</Typography>
      <Typography>Last name: {info?.results[0].name.last}</Typography>
      <Typography>City: {info?.results[0].location.city}</Typography>
      <Typography>State: {info?.results[0].location.state}</Typography>
      <Typography>Country: {info?.results[0].location.country}</Typography>
      <Typography>Gender: {info?.results[0].gender}</Typography>
      <Typography>DOB: {info?.results[0].dob.date}</Typography>
      <Typography>Eye Color: </Typography>
      <Typography>
        Time Zone Offset: {info?.results[0].location.timezone.offset}
      </Typography>
      <Typography>
        time zone description : {info?.results[0].location.timezone.description}
      </Typography>

      <button onClick={refreshPage}>Click to reload!</button>
    </Box>
  );
}
