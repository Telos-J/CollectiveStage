const video1 = document.querySelector('#video1')
const video2 = document.querySelector('#video2')
const video3 = document.querySelector('#video3')
const video4 = document.querySelector('#video4')
const start = document.querySelector('#start')
const change = document.querySelector('#change')

video1.addEventListener('canplaythrough', () => {
    video1.style.opacity = 1
})

start.addEventListener('click', () => {
    video1.muted = false
    //video1.volume = 0.1
    video1.currentTime = 10.8
    video1.style.opacity = 1
    video1.play()
    video2.currentTime = 10.366666
    video2.play()
    video3.currentTime = 1.166666
    video3.play()
    video4.currentTime = 0.333333
    video4.play()
})

change.addEventListener('click', () => {
    video4.style.opacity = video4.muted ? 1 : 0  
    video4.muted = video4.muted ? false : true    
    video1.muted = video1.muted ? false : true
})
