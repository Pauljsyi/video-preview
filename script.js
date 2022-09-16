console.log("page loaded...");

// play video when hovering

//pause video when hovering?

// or

// pause when not hovering?
let myVideo = document.getElementById("coffee-bean-video");

function playAndPauseOnHover() {
  if (myVideo.paused) {
    console.log(myVideo.paused);
    myVideo.play();
    myVideo.muted = true;
    myVideo.loop = true;
  } else {
    myVideo.pause();
  }
}

function pauseMouseOut() {
  if (myVideo.play) {
    myVideo.pause();
  }
}
