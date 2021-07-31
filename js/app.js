const videos = Array.from(document.querySelectorAll('video'))
const videoContainer = document.querySelector('.video-container')
const playButton = document.querySelector('#play-button')

playButton.addEventListener('click', () => {
    const video = document.querySelector('video.selected')
    video.muted = false
    playButton.classList.add('rotating')

    if (video.paused) {
        for (const video of videos) {
            if (video.currentTime < video.dataset.starttime)
                video.currentTime = video.dataset.starttime
            video.volume = 0.1
            video.play()
        }
    } else {
        for (const video of videos) {
            video.pause()
            playButton.classList.remove('rotating')
        }
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
        text.innerHTML = video.dataset.title
        video.muted = false
        if (getComputedStyle(maximize).display === 'block')
            videoContainer.style.transform = `translateX(${idx * -25 + 25}%)`
        else
            videoContainer.style.transform = `translateX(${idx * -100}%)`
        resetText()
        moveText()
    })
}

const textContainer = document.querySelector('#text-container')
const text = document.querySelector('#text')

function resetText() {
    text.style.transition = ``
    text.style.transform = `translateX(0px)`
}

function moveText() {
    const time = Math.floor((text.clientWidth - textContainer.clientWidth) / 50)
    text.style.transition = `transform ${time}s linear`
    text.style.transform = `translateX(${textContainer.clientWidth - text.clientWidth}px)`

    text.addEventListener('transitionend', () => {
        if (text.style.transform === 'translateX(0px)')
            text.style.transform = `translateX(${textContainer.clientWidth - text.clientWidth}px)`
        else
            text.style.transform = 'translateX(0px)'
    })
}

const maximize = document.querySelector(`#maximize`)
const minimize = document.querySelector(`#minimize`)

maximize.addEventListener('click', () => {
    const video = document.querySelector('video.selected')
    const idx = videos.indexOf(video)
    maximize.style.display = 'none'
    minimize.style.display = 'block'
    videoContainer.classList.add('maximized')
    videoContainer.style.transform = `translateX(${idx * -100}%)`
})

minimize.addEventListener('click', () => {
    const video = document.querySelector('video.selected')
    const idx = videos.indexOf(video)
    maximize.style.display = 'block'
    minimize.style.display = 'none'
    videoContainer.classList.remove('maximized')
    videoContainer.style.transform = `translateX(${idx * -25 + 25}%)`
})

const leftArrow = document.querySelector('#left-arrow')
const rightArrow = document.querySelector('#right-arrow')

leftArrow.addEventListener('click', () => {
    const video = document.querySelector('video.selected')
    let prevVideoIndex = videos.indexOf(video) - 1
    if (prevVideoIndex < 0) prevVideoIndex = videos.length - 1
    videos[prevVideoIndex].click()
})

rightArrow.addEventListener('click', () => {
    const video = document.querySelector('video.selected')
    let nextVideoIndex = videos.indexOf(video) + 1
    if (nextVideoIndex >= videos.length) nextVideoIndex = 0
    videos[nextVideoIndex].click()
})

let mousemoveTime = Date.now()
addEventListener('mousemove', () => {
    mousemoveTime = Date.now()
    leftArrow.style.transition = ''
    rightArrow.style.transition = ''
    playerContainer.style.transition = ''
    document.body.classList.remove('hidden')
})

const playerContainer = document.querySelector('#player-container')

setInterval(() => {
    if(Date.now() - mousemoveTime > 3000) {
        console.log('mouse')
       leftArrow.style.transition = 'opacity 0.5s'
       rightArrow.style.transition = 'opacity 0.5s'
       playerContainer.style.transition = 'opacity 0.5s'
       document.body.classList.add('hidden')
    }
}  , 100)