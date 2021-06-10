const videos = Array.from (document.querySelectorAll('video'))
const videoContainer = document.querySelector('.video-container')
const start = document.querySelector('#start')
const change = document.querySelector('#change')
let currentVideo = video1

video1.addEventListener('canplaythrough', () => {
    //video1.style.opacity = 1
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
for (let idx in videos){
const video = videos[idx]
video.addEventListener('click', () => {
    const prevVideo = document.querySelector('video.selected')
    prevVideo.classList.remove('selected')
    video.classList.add('selected')
    videoContainer.style.transform = `translateX(${idx * -25 + 25}%)`
})

}