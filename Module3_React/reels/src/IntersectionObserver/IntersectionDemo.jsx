import React, { useEffect } from "react";
import "./Inter.css";
// import all the videos
import video1 from "./v1.mp4";
import video2 from "./v2.mp4";
import video3 from "./v3.mp4";
import video4 from "./v4.mp4";

const IntersectionDemo = () => {
  let conditionObject = {
    root: null, //observe from whole page
    threshold: "0.8", //80%
  };

  function cb(entries) {
    console.log(entries);
    entries.forEach((entry) => {
      let child = entry.target.children[0];
      // play(); => async
      // pause(); => sync

      child.play().then(function () {
        if (entry.isIntersecting == false) {
          child.pause();
        }
      });
    });
  }

  useEffect(() => {
    // code which will run when the component loads
    let observerObject = new IntersectionObserver(cb, conditionObject);
    let elements = document.querySelectorAll(".video-container");

    elements.forEach((el) => {
      observerObject.observe(el); //Intersection Observer starts observing each video element
    });
  }, []);

  return (
    <div>
      <div className="video-container">
        <Video src={video1} id="a"></Video>
      </div>
      <div className="video-container">
        <Video src={video2} id="b"></Video>
      </div>
      <div className="video-container">
        <Video src={video3} id="c"></Video>
      </div>
      <div className="video-container">
        <Video src={video4} id="d"></Video>
      </div>
    </div>
  );
};

function Video(props) {
  return (
    <video className="video-styles" muted={true} id={props.id} loop={true}>
      <source src={props.src} type="video/mp4"></source>
    </video>
  );
}

export default IntersectionDemo;
