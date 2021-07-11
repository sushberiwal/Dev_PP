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
  let [comment, setComment] = useState("");
  let [commentList, setCommentList] = useState([]);
  // { comment , profilePhotoUrl }

  useEffect(async () => {
    console.log(props);
    let uid = props.postObj.uid;
    let doc = await firebaseDB.collection("users").doc(uid).get();
    let user = doc.data();
    let commentList = props.postObj.comments;
    // {uid , comment} , {uid , comment} , {uid , comment};
    let updatedCommentList=[];
    
    for(let i=0 ; i<commentList.length ; i++){
      let commentObj = commentList[i];
      let doc = await firebaseDB.collection("users").doc(commentObj.uid).get();
      let commentUserPic = doc.data().profileImageUrl;
      updatedCommentList.push({ profilePic: commentUserPic, comment: commentObj.comment });
    }
    
    console.log(updatedCommentList);
    setUser(user);
    setCommentList(updatedCommentList);
  }, []); //comp did Mount

  return (
    <Container>
      <Card style={{ height: "600px", width: "300px" }}>
        <Avatar src={user ? user.profileImageUrl : ""}></Avatar>
        <Typography variant="span">{user ? user.username : ""}</Typography>
        <div className="video-container">
          <Video src={props.postObj.videoLink}></Video>
        </div>
        <Typography variant="p">Comments</Typography>

        <TextField
          variant="outlined"
          label="Add a comment"
          size="small"
        ></TextField>
        <Button variant="contained" color="secondary">
          Post
        </Button>

        {commentList.map((commentObj) => {
          return (
            <>
              <Avatar src={commentObj.profilePic}></Avatar>
              <Typography variant="p">{commentObj.comment}</Typography>
            </>
          );
        })}
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
