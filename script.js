let white = false

modeBtn = document.querySelector('.mode')
modeBtn.addEventListener('click', changeMode)

function changeMode(){
    if(white){
        document.body.style.background = '#252525'
        document.body.style.color = '#f1f1f1'
        modeBtn.style.background = "white"
    }else{
        document.body.style.background = '#f1f1f1'
        document.body.style.color = '#252525'
        modeBtn.style.background = "black"
    }

    white = !white
}