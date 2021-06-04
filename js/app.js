const videos = document.querySelectorAll('video')
const start = document.querySelector('#start')
const change = document.querySelector('#change')

video1.addEventListener('canplaythrough', () => {
    video1.style.opacity = 1
})

start.addEventListener('click', () => {
    video1.muted = false
    //video1.volume = 0.1
    video1.style.opacity = 1

    for (const video of videos) {
        video.currentTime = video.dataset.starttime
        video.play()
    }
})

change.addEventListener('click', () => {
    video3.style.opacity = video3.muted ? 1 : 0  
    video3.muted = video3.muted ? false : true    
    video1.muted = video1.muted ? false : true
})
