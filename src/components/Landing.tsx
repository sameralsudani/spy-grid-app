import React, { useState } from "react";
import { useFetch } from "../Hooks/useFetch";

import { makeStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";

import { Typography, Box, Button } from "@mui/material";

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
("https://randomuser.me/api");
export default function Landing() {
  const { data, loading, error } = useFetch("https://randomuser.me/api/");

  function refreshPage() {
    window.location.reload();

    // window.location.reload();
  }

  // function getAge(dateString) {
  //   const age = new Date(dateString);
  //   return age;
  // }

  // const birthDate = getAge(results[0].dob.date);

  // const classes = useStyles();
  if (error) {
    <div>{error}</div>;
  }
  if (data && !loading) {
    console.log(data);
    return (
      <Box>
        <img src={data.picture.large} alt="" width="386" height="386" />
        <Typography>codename:{data?.login.username}</Typography>

        <Typography>first name: {data?.name.first}</Typography>
        <Typography>Last name: {data?.name.last}</Typography>
        <Typography>City: {data?.location.city}</Typography>
        <Typography>State: {data?.location.state}</Typography>
        <Typography>Country: {data?.location.country}</Typography>
        <Typography>Gender: {data.gender}</Typography>
        {/* <Typography>DOB: {birthDate}</Typography> */}
        <Typography>Eye Color: </Typography>
        <Typography>
          Time Zone Offset: {data.location.timezone.offset}
        </Typography>
        <Typography>
          Time Zone Description : {data.location.timezone.description}
        </Typography>

        <Button onClick={refreshPage} variant="contained">
          Next
        </Button>
      </Box>
    );
  } else
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
}
