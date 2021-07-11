import React, { useEffect, useState } from "react";
import { firebaseDB } from "../config/firebase";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  makeStyles,
  Typography,
  TextField,
  Avatar,
  Container,
} from "@material-ui/core";

const VideoPost = (props) => {
  let [user, setUser] = useState(null);
  useEffect(() => {
    console.log(props);
    let uid = props.postObj.uid;
    firebaseDB
      .collection("users")
      .doc(uid)
      .get()
      .then((doc) => {
        let user = doc.data(); // get user who created the post
        setUser(user);
      });
  }, []); //comp did Mount

  return (
      <Container>
        <Card style={{ height: "600px", width: "300px" }}>
          <Avatar src={user ? user.profileImageUrl : ""}></Avatar>
          <Typography variant="span">{user ? user.username : ""}</Typography>
          <div className="video-container">
            <Video src={props.postObj.videoLink}></Video>
          </div>
        </Card>
      </Container>
  );
};

function Video(props) {
  return (
    <video
      style={{
        height: "80%",
        width: "100%",
      }}
      muted={true}
      loop={true}
      controls
    >
      <source src={props.src} type="video/mp4"></source>
    </video>
  );
}

export default VideoPost;
