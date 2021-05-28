const video1 = document.querySelector('#video1')
const video2 = document.querySelector('#video2')
const start = document.querySelector('#start')
const change = document.querySelector('#change')

video1.addEventListener('canplaythrough', () => {
    video1.style.opacity = 1
})

start.addEventListener('click', () => {
    video1.muted = false
    video1.volume = 0.1
    video1.currentTime = 10.366666
    video1.style.opacity = 1
    video1.play()
    video2.currentTime = 1.166666
    video2.play()
})

change.addEventListener('click', () => {
    video2.style.opacity = parseInt(video2.style.opacity) ? 0 : 1      
})
