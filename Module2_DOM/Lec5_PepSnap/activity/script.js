let videoPlayer = document.querySelector("video");
let recordButton = document.querySelector("#record-video");
let photoButton = document.querySelector("#capture-photo");
let recordingState = false;
let constraints = { video: true };
let recordedData;
let mediaRecorder;

(async function () {
  let mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
  videoPlayer.srcObject = mediaStream;
  mediaRecorder = new MediaRecorder(mediaStream);
  // so next we have attached functions to these events
  mediaRecorder.onstart = function (e) {
    console.log("Inside on start !!");
    console.log(e);
  };

  mediaRecorder.ondataavailable = function (e) {
    console.log("Inside on data available !!");
    console.log(e.data);
    // let blob = new Blob( e.data , {"type":"video/mp4"});
    recordedData = e.data;
    saveVideoToFs();
  };

  mediaRecorder.onstop = function (e) {
    console.log("Inside on stop !!");
    console.log(e);
  };

  // attach click event on recordButton
  recordButton.addEventListener("click", function () {
    if (recordingState) {
      // stop the recording
      mediaRecorder.stop();
      recordButton.querySelector("div").classList.remove("record-animate");
    } else {
      //start the recording
      mediaRecorder.start();
      recordButton.querySelector("div").classList.add("record-animate");
    }
    recordingState = !recordingState;
  });

  photoButton.addEventListener("click", capturePhotos);
})();

function saveVideoToFs() {
  console.log("Saving Video");
  // file object in recordedData
  let videoUrl = URL.createObjectURL(recordedData); // convert Blob object into Blob Url
  console.log(videoUrl);

  let aTag = document.createElement("a");
  aTag.download = "video.mp4";
  aTag.href = videoUrl;

  console.log(aTag);
  aTag.click(); // download start for video
}

function capturePhotos() {
  photoButton.querySelector("div").classList.add("capture-animate");

  setTimeout(function(){
    photoButton.querySelector("div").classList.remove("capture-animate");
  } , 1000);

  let canvas = document.createElement("canvas");
  canvas.height = videoPlayer.videoHeight;
  canvas.width = videoPlayer.videoWidth;

  let ctx = canvas.getContext("2d");
  ctx.drawImage(videoPlayer, 0, 0);

  let imageUrl = canvas.toDataURL("image/jpg"); //canvas object => file url String

  let aTag = document.createElement("a");
  aTag.download = "photo.jpg";
  aTag.href = imageUrl;
  aTag.click();
}
