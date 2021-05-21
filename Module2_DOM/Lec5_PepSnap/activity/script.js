let videoPlayer = document.querySelector("video");
let recordButton = document.querySelector("#record-video");
let photoButton = document.querySelector("#capture-photo");
let recordingState = false;
let constraints = {video:true};
let recordedData;
let mediaRecorder;

(async function(){
    try{
        let mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        videoPlayer.srcObject = mediaStream; 
        mediaRecorder = new MediaRecorder(mediaStream);
        // so next we have attached functions to these events
        mediaRecorder.onstop = function(e){
            console.log("Inside on stop !!");
            console.log(e);
        }
        mediaRecorder.onstart = function(e){
            console.log("Inside on start !!");
            console.log(e);
        }
        mediaRecorder.ondataavailable = function(e){
            console.log("Inside on data available !!");
            recordedData = e.data;
        }
        console.log(mediaRecorder);
    
    
        // attach click event on recordButton
        recordButton.addEventListener("click" , function(){
            if(recordingState){
                // stop the recording
                mediaRecorder.stop();
                recordButton.innerHTML = "Record";
            }
            else{
                //start the recording
                mediaRecorder.start();
                recordButton.innerHTML = "Recording";
            }
            recordingState = !recordingState;
        })
    }
    catch(error){
    }
})();





