const videos = Array.from(document.querySelectorAll('video'))
const videoContainer = document.querySelector('.video-container')
const start = document.querySelector('#start')
const change = document.querySelector('#change')
let currentVideo = video1

start.addEventListener('click', () => {
    video1.muted = false
    start.classList.add('rotating')
    
    for (const video of videos) {
        video.currentTime = video.dataset.starttime
        video.volume = 0.1
        video.play()
    }
})

for (let idx in videos) {
    const video = videos[idx]
    video.addEventListener('click', () => {
        const prevVideo = document.querySelector('video.selected')
        prevVideo.classList.remove('selected')
        prevVideo.muted = true
        video.classList.add('selected')
        video.muted = false
        videoContainer.style.transform = `translateX(${idx * -25 + 25}%)`
    })
}
