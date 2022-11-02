const leftBtn = document.querySelector('.left')
const rigthBtn = document.querySelector('.rigth')
const images = [...document.querySelectorAll('.image')]

index = 0

noneAll = () => {
    for(let i of images){
        if(index == images.indexOf(i)){
            i.style.display = 'block'
        } else{
            i.style.display = 'none'
        }
    }
}

toRigth = () =>{
    if(index<images.length-1){
        index++
    }else if(index === images.length-1){
        index = 0
    }
    noneAll()
}

toLeft = () =>{
    if(index>0){
        index--
    }else if(index === 0){
        index = images.length-1
    }
    noneAll()
}
leftBtn.addEventListener('click', toLeft)
rigthBtn.addEventListener('click', toRigth)


window.addEventListener('keydown', (event)=>{
    event.key === 'ArrowLeft' ? toLeft() : event.key ===  'ArrowRight'? toRigth() : console.log(key);
})