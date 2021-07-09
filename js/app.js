const videos = Array.from(document.querySelectorAll('video'))
const videoContainer = document.querySelector('.video-container')
const playButton = document.querySelector('#play-button')
let currentVideo = video1

playButton.addEventListener('click', () => {
    video1.muted = false
    playButton.classList.add('rotating')

    for (const video of videos) {
        video.currentTime = video.dataset.starttime
        video.volume = 0.1
        video.play()
    }
})

setTimeout(() => {
    window.scrollTo(0, 0)
}, 100)

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
