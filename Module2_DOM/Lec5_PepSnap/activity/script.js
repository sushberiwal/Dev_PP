let videoPlayer = document.querySelector("video");
let constraints = {video:true};

(async function(){
    // let devices = await navigator.mediaDevices.enumerateDevices();
    // console.log(devices);


    let mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    console.log(mediaStream);

    videoPlayer.srcObject = mediaStream;    
})();
