import React from "react";

const VideoPost = (props) => {
  return (
    <div className="video-container">
      <Video src={props.postObj.videoLink}></Video>
    </div>
  );
};

function Video(props) {
  return (
    <video
      style={{
        height: "80vh",
        margin: "5rem",
        border: "1px solid black",
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
