import React from "react";
import Image from "next/image";
import user from "../styles/userongoing.module.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from '@mui/material/CardContent';
import Box from "@mui/material/Box";

//TODO: FIX CSS
export default function UserProfile(props) {
  return (
    <>
      <Box>
        <Card>
          <CardMedia
            component="img"
            sx={{ height: 300, width: 300 }}
            image={props.path}
          />
        <CardContent>
  <p>Name: {props.name}</p>
  <p>Age: {props.age}</p>

        </CardContent>
        </Card>
      </Box>
    </>
  );
}
