modeP = -1

document.body.innerHTML = ""
let date = new Date()
min = date.getMinutes()
hour = date.getHours()

min < 10 ? min = "0" + min: min = min
hour < 10 ? hour = "0" + hour: hour = hour


iphone = document.createElement('div')
document.body.appendChild(iphone)
iphone.style.margin = "auto"
iphone.style.marginTop = 0
iphone.style.border = "10px solid gold"
iphone.style.borderRadius = "40px"
iphone.style.width="320px"
iphone.style.height = "600px"
iphone.style.position = "realitive"

let main = document.createElement("div")
iphone.appendChild(main)

let player = document.createElement("div")
main.appendChild(player)
player.className = ("player")
player.id = ("player")
player.style.borderRadius = '30px'
player.style.maxWidth = '260px'
player.style.width = '100%'
player.style.padding = '30px'
// player.style.boxShadow = "5px, 6px, 3px, -4px, #0000004d"
// player.style.transition = '0.1s all'
//-----------------------------------------------------------
player.style.position ='absolute';
player.style.background =' linear-gradient(45deg,#F17C5888, #E9458488, #24AADB88, #27DBB188, #FFDC1888, #FF370688)';
player.style.backgroundSize = '300%, 300%';
player.style.animation = 'gradient 5s linear infinite';
player.style.animationDirection = 'alternate';
player.style.top = "18px"
player.style.height = "540px"


//===================================================================================
infobar = document.createElement('div')
player.appendChild(infobar)
infobar.style.display = "flex"
infobar.style.height = "1px"
infobar.style.width = "1px"
infobar.style.alignItems = "center"
infobar.justifyContent = 'center'

bgMode = document.createElement("div")
infobar.appendChild(bgMode)
bgMode.style.width = '40px'
bgMode.style.height = "19px"
bgMode.style.background = 'white'
bgMode.style.margin = "auto"
bgMode.style.marginTop = '10px'
bgMode.style.borderRadius = "25px"
bgMode.style.cursor = "pointer"
bgMode.style.border = "4px solid gold"
bgMode.style.margin = "-25px auto auto 233px"

bgClick = document.createElement("div")
bgMode.appendChild(bgClick)
bgClick.style.width = "20px"
bgClick.style.height = "20px"
bgClick.style.borderRadius = '25px'
bgClick.style.background = "black"
// bgClick.style.marginRight = "25px"
setInterval(() => {
    
    modeP==-1? bgClick.style.marginRight = "25px": bgClick.style.marginLeft = "20px"
}, 0);


bgMode.onclick = () =>{
    if(modeP == 1){
    bgClick.style.background = "white"
    bgClick.style.marginLeft = "20px"
    document.body.style.background = "white"
    modeP*=-1
    bgMode.style.background = "black"
}else{
    bgClick.style.background = "black"
    bgClick.style.marginLeft = 0
    document.body.style.background = "black"
    modeP*=-1
    bgMode.style.background = "white"
}
}



ddmm = document.createElement('div')
infobar.appendChild(ddmm)
ddmm.style.height = '20px'
ddmm.style.width = '40px'
ddmm.style.marginLeft = "16px"

p2 = document.createElement("p")
ddmm.appendChild(p2)
p2.innerHTML = `${hour}:${min}`
p2.style.marginTop = '-15px'
p2.style.marginLeft = "-310px"
p2.style.marginRight = 0
p2.style.fontSize = '15px'
p2.style.color = "white"
p2.style.userSelect = "none"


bang = document.createElement("div")
infobar.appendChild(bang)
bang.style.zIndex = 50
bang.style.top = 0
bang.style.left = '62px'
bang.style.position = "absolute"
bang.style.width = '200px'
bang.style.height = '30px'
bang.style.borderRadius = "0px 0px 20px 20px"
bang.style.background = "black"



camera = document.createElement("div")
bang.appendChild(camera)

camera.style.position = "absolute"
camera.style.bottom = "8px"
camera.style.width = "1rem"
camera.style.height = "1rem"
camera.style.borderRadius = "50%"
camera.style.border = ".2rem solid #1e1f22"
camera.style.background = "#447bb5a6"
camera.style.left = "150px"
camera.style.top = "10%"

speaker = document.createElement("div")
bang.appendChild(speaker )
speaker.style.position = "absolute"
speaker.style.rigth = '3.9rem'
speaker.style.width = "5.2rem"
speaker.style.height = ".6rem"
speaker.style.background = "#333333"
speaker.style.borderRadius = ".2rem"
speaker.style.left = "3rem"
speaker.style.top = "25%"   
//===================================================================================


let title = document.createElement('div')
player.appendChild(title)
title.className = ('title')
title.style.fontStyle = "normal"
title.style.fontWeight = '500'
title.style.fontSize = '14px'
title.style.lineHeight = "16px"
title.style.color = "#2B3C5B"
title.style.textAlign = "center"
title.style.userSelect = "none"

let cover = document.createElement('div')
player.appendChild(cover)
cover.className = ('cover')
cover.style.display = "flex"
cover.style.justifyContent = "center"
cover.style.margin = "9px 0"


let coverImg = document.createElement('img')
cover.appendChild(coverImg)
coverImg.className = ("coverImg ")
coverImg.src = ('img/hattori.png')
coverImg.style.width = '250px'
coverImg.style.height= '230px'
coverImg.style.userSelect = "none"


let song = document.createElement('div')
player.appendChild(song)
song.className = ('song')
song.style.fontStyle="normal"
song.style.fontSize = '24px'
song.style.fontWeight= "bold"
song.style.color = "2B3C5B"

let audio = document.createElement('audio')
player.appendChild(audio)

let progressContainer = document.createElement('div')
player.appendChild(progressContainer)
progressContainer.className= ('progressContainer')
progressContainer.style.background = '#E4E9ED'
progressContainer.style.borderRadius = "5px"
progressContainer.style.width = "100%"
progressContainer.style.height = "10px"
progressContainer.style.marginTop = '63px'
progressContainer.style.display = "flex"
progressContainer.style.alignItems = "center"
progressContainer.style.cursor = "pointer"

let progress = document.createElement('div')
progressContainer.appendChild(progress)
progress.className = ('progress')
progress.style.background = "#2B3C5B"
progress.style.borderRadius = "5px"
progress.style.height = "10px"

let timeMother = document.createElement("div")
player.appendChild(timeMother)
timeMother.className = ('timeMother')
timeMother.style.display = "flex"
timeMother.style.justifyContent = "space-between"
timeMother.style.marginTop = "15px"


let time1 = document.createElement("div")
timeMother.appendChild(time1)
time1.className = ('time1')
time1.style.userSelect = "none"


let time2 = document.createElement("div")
timeMother.appendChild(time2)
time2.className = ('time2')
time2.innerHTML = (audio.duration)
time2.style.userSelect = "none"

let volMother = document.createElement('div')
player.appendChild(volMother)
volMother.className = ("volMother")
volMother.style.display = "flex"
volMother.style.justifyContent = "space-between"
volMother.style.gap = "20px"

let volStatus = document.createElement('div')
volMother.appendChild(volStatus)
volStatus.className = ('volStatus')
volStatus.style.cursor = "pointer"
volStatus.style.width = "40px"

let volStatusImg = document.createElement("img")
volStatus.appendChild(volStatusImg)
volStatusImg.src = ('img/soundOn.png')
volStatusImg.style.width = '40px'
volStatus.style.height = '40px'
volStatus.style.userSelect = "none"

let volBar = document.createElement("div")
volMother.appendChild(volBar)
volBar.className = ("volBar")
volBar.style.width = "90%"

volBar.style.display = "flex"
volBar.style.alignItems = "center"


let volContainer = document.createElement('div')
volBar.appendChild(volContainer)
volContainer.className = ('volContainer')
volContainer.style.background = 'rgb(228, 233, 237)';
volContainer.style.borderRadius = '5px';
volContainer.style.width ='100%';
volContainer.style.height = '10px';
volContainer.style.display = 'flex';
volContainer.style.aligItems = 'center';
volContainer.style.cursor = 'pointer';

let volProgress = document.createElement('div')
volContainer.appendChild(volProgress)
volProgress.className =("volProgress")
volProgress.style.background = 'rgb(43, 60, 91)';
volProgress.style.borderRadius = '5px';
volProgress.style.width = '100%'

let buttons = document.createElement('div')
player.appendChild(buttons)
buttons.className = ("buttons")

buttons.style.display = 'flex'
buttons.style.justifyContent = "space-around"
buttons.style.alignItems = "center"
buttons.style.maxWidth = "184px"
buttons.style.width = "100%"
buttons.style.margin = "auto" 
buttons.style.marginTop = "25px"

let prev = document.createElement("div")
buttons.appendChild(prev)
prev.className = ('prev')
prev.style.cursor = "pointer"


let prevImg = document.createElement('img')
prev.appendChild(prevImg)
prevImg.className = ('imgSrc')
prevImg.src = ('img/prev.png')
prevImg.style.width = '50px'
prevImg.style.height = "50px"
prevImg.style.userSelect = "none"

let play = document.createElement("div")
buttons.appendChild(play)
play.className = ('play')
play.style.cursor = "pointer"
play.style.marginLeft = "25px"
play.style.marginRight = '25px'

let playImg = document.createElement("img")
play.appendChild(playImg)
playImg.className = ('imgSrc')
playImg.src = ('img/play.png')
playImg.style.width = '75px'
playImg.style.height = "75px"
playImg.style.userSelect = "none"

let next = document.createElement("div")
buttons.appendChild(next)
next.className = ('next')
next.style.cursor = "pointer"

let nextImg = document.createElement('img')
next.appendChild(nextImg)
nextImg.className = ('imgSrc')
nextImg.style.width = '50px'
nextImg.style.height = "50px"
nextImg.src = ('img/next.png')
nextImg.style.userSelect = "none"

let h1 = document.createElement('h1')
    main.appendChild(h1)
    instImg = document.createElement("img")
    instLink = document.createElement('a')
    instLink.classList.add("a")
    main.appendChild(instImg)
    main.appendChild(instLink)

    toHome = document.createElement('div')
    player.appendChild(toHome)
    toHome.style.width = "200px"
    toHome.style.height = "10px"
    toHome.style.background = "white"
    toHome.style.borderRadius = "10px"
    toHome.style.marginTop = '5px'
    toHome.classList.add("toHome")
    toHome.style.cursor = "pointer"
    toHome.style.marginLeft = "auto"
    toHome.style.marginRight = "auto"
    toHome.style.marginTop= '45px'

songs  = [
    'Saloon',
    'Ночь',
    'Временно',
    'Не теряя',
    "Need me",
    'Silhouette'
]

let sIndex = 0
title.innerHTML = songs.sIndex
const loadSong = (x) => {
    title.innerHTML = x
    audio.src = `audio/${x}.mp3`
    cover.src = `img/cover${sIndex + 1}.png`
}
loadSong(songs[sIndex])

playSong = () =>{
    player.classList.add('play')
    playImg.src = "img/pause.png"
    audio.play()
    coverImg.style.animation ='rotation 8s infinite linear';
    instImg.innerHTML = ""
    instImg.src = ""
    instImg.style.width = 0
    instImg.style.height = 0
    instLink.innerHTML = ""
    document.createElement("a")

    
}

pauseSong = () =>{
    player.classList.remove('play')
    playImg.src = "img/play.png"
    audio.pause()
    coverImg.style.animation ='';
    
}
play.onclick = () =>{
    const isPlaying = player.classList.contains('play')
    isPlaying?pauseSong():playSong()
}

nextSong = () => {
    sIndex++
    if(sIndex>songs.length-1){
        sIndex=0
    }
    loadSong(songs[sIndex])
    playSong()
}

prevSong = () => {
    sIndex--
    if(sIndex<0){
        sIndex=songs.length-1
    }
    loadSong(songs[sIndex])
    playSong()
}

next.onclick = () => {
    nextSong()
}
prev.onclick = () =>{
    prevSong()
}

updateProgress = (x) =>{
    const {duration, currentTime} = x.srcElement
    const progressProcent = (currentTime / duration)*100
    progress.style.width = `${progressProcent}%`
    progress.style.transition =  `width 0.4s`
}
audio.addEventListener("timeupdate", updateProgress)

setProgress = (e) => {
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX/240)*duration
}
progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)

let minutes =  ''
let secounds =  ''
let minutes2 =  ''
let secounds2 = ''
////-------------------------------------------------------
setInterval(() => {
minutes = Math.floor(audio.currentTime/60) 
secounds = Math.floor(audio.currentTime - (minutes*60))
minutes2 = Math.floor(audio.duration/60) 
secounds2 = Math.floor(audio.duration - (minutes2*60))
    if(minutes<10 && secounds<10){
        time1.innerHTML = `0${minutes}:0${secounds}`
    }else if(minutes<10 && secounds>=10){
        time1.innerHTML = `0${minutes}:${secounds}`
    }else if (minutes>=10 && secounds<10){
        time1.innerHTML = `${minutes}:0${secounds}`
    }else {
        time1.innerHTML = `${minutes}:${secounds}`
    }
    minutes2<10 && secounds2<10 ? time2.innerHTML = `0${minutes2}:0${secounds2}` 
        :minutes2>=10 && secounds2<10 ? time2.innerHTML = `${minutes2}:0${secounds2}`
        :minutes2<10 && secounds2>=10?time2.innerHTML = `0${minutes2}:${secounds2}`
        :time2.innerHTML = `${minutes2}:${secounds2}` 
}, 0);

soundOn = () => {
    volStatus.classList.add("soundOn")
    volStatusImg.src = "img/soundOn.png"
    audio.volume = 1
}
soundOff=() =>{
    volStatus.classList.remove("soundOn")
    volStatusImg.src = "img/soundOff.png"
    audio.volume = 0
}
volStatus.addEventListener("click", () =>{
    let isMute = volStatus.classList.contains("soundOn")
    isMute?soundOff():soundOn()
})

function setVolProgress(e){
    const widthVol = this.clientWidth
    const clickX = e.offsetX
    audio.volume = clickX/widthVol
    volProgress.style.width = `(audio.volume*100)%`
}
    volContainer.addEventListener("click", setVolProgress)
    
    function changeVolProgress(e){
    const widthVol = this.clientWidth
    const clickX = e.offsetX 
    const dbgb = clickX/widthVol*100 + "%"
    volProgress.style.width = dbgb
    volProgress.style.transition =  `width 0.5s`
}
volContainer.addEventListener("click", changeVolProgress)    
