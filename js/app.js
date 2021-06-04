const videos = Array.from (document.querySelectorAll('video'))
const start = document.querySelector('#start')
const change = document.querySelector('#change')
let currentVideo = video1

video1.addEventListener('canplaythrough', () => {
    video1.style.opacity = 1
})

start.addEventListener('click', () => {
    video1.muted = false
    //video1.volume = 0.1

    for (const video of videos) {
        video.currentTime = video.dataset.starttime
        video.play()
    }    
})

//!==
change.addEventListener('click', () => {
    const notCurrentVideo = videos.filter(video => video !== currentVideo)
    const nextVideo = notCurrentVideo[Math.floor(Math.random() * notCurrentVideo.length)]
    
    currentVideo.style.opacity = 0  
    nextVideo.style.opacity = 1   
    currentVideo.muted = true
    nextVideo.muted = false

    currentVideo = nextVideo
})
