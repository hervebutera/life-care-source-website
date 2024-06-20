window.onload = function () {
    const homeVideoBox = document.getElementById("home-video");
    const playBtn = document.getElementById("play-btn"); 
    const videoOverlay = document.getElementById("video-overlay");
    
    playBtn.addEventListener("click", () => {
        homeVideoBox.setAttribute("controls", "true");
        homeVideoBox.play();
        videoOverlay.style.display = "none";
    })
}

