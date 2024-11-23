const fileInput = document.getElementById('fileInput'); 
const videoPlayer = document.getElementById('videoPlayer'); 
const fullscreenButton = document.getElementById('fullscreenButton'); 
// Handle file upload 
fileInput.addEventListener('change', (event) => { 
    const file = event.target.files[0]; 
    if (file) { 
        const fileURL = URL.createObjectURL(file); 
        videoPlayer.src = fileURL; 
        videoPlayer.load(); 
        videoPlayer.play(); 
        videoPlayer.muted = false; // Unmute when the video starts 
    } else { 
        alert("Please select a valid video file.");
    } 
}); 
function getVideoMimeType(fileName) { 
    const ext = fileName.split('.').pop().toLowerCase(); 
    
    switch (ext) { 
        case 'mp4': 
        return 'video/mp4'; 
        case 'webm': 
        return 'video/webm'; 
        case 'mkv': 
        return 'video/x-matroska'; 
        case 'avi': 
        return 'video/x-msvideo'; 
        case 'mov': 
        return 'video/quicktime'; 
        case 'flv': 
        return 'video/x-flv'; 
        default: 
        return 'video/mp4'; // Fallback
         }
         } // Fullscreen functionality 
fullscreenButton.addEventListener('click', () => {
    if (videoPlayer.requestFullscreen) {
         videoPlayer.requestFullscreen(); 
        } else if 
        (videoPlayer.webkitRequestFullscreen) { 
            // Safari 
        videoPlayer.webkitRequestFullscreen();
        } else if 
        (videoPlayer.msRequestFullscreen) { 
            // IE/Edge 
        videoPlayer.msRequestFullscreen(); 
    } 
});