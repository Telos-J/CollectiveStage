const videos = Array.from(document.querySelectorAll('video'))
const videoContainer = document.querySelector('.video-container')
const playButton = document.querySelector('#play-button')

playButton.addEventListener('click', () => {
    const video = document.querySelector('video.selected')
    video1.muted = false
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
        videoContainer.style.transform = `translateX(${idx * -25 + 25}%)`
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
    video.classList.add('maximized')
    videoContainer.style.transform = `translateX(${idx * -25}%)`
})

minimize.addEventListener('click', () => {
    const video = document.querySelector('video.selected')
    const idx = videos.indexOf(video)
    maximize.style.display = 'block'
    minimize.style.display = 'none'
    video.classList.remove('maximized')
    videoContainer.style.transform = `translateX(${idx * -25 + 25}%)`
})
