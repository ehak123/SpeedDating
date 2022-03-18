import React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from '@mui/material/CardContent';
import Box from "@mui/material/Box";
import { getUserInfo, getUserFullName } from '../context/users'

//TODO: FIX CSS
export default function UserProfile({name}) {
  const user = getUserInfo(name);
  const fullname = getUserFullName(name);

  return (
    <>
      <Box>
        <Card>
          <CardMedia
            component="img"
            sx={{ height: 300, width: 300 }}
            image={user.path}
          />
          <CardContent>
            <p>Name: {fullname}</p>
            <p>Age: {user.age}</p>

          </CardContent>
        </Card>
      </Box>
    </>
  );
}

