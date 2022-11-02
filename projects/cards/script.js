const cards = document.querySelectorAll('.card') 
const btns = document.querySelectorAll('.btn')
const sbmt = document.querySelector('.sbmt')
const colimput = document.querySelector('.color-input')
const esimInch = document.querySelector('.esim-te-xi')
const navli = document.querySelectorAll('.navli')

btns.forEach( btn => {  
        btn.style.background = btn.value
        btn.addEventListener('click', () => {
            document.body.style.background = btn.value
            colorControl()
        })
    }
)

colimput.addEventListener("input", () => {
    document.body.style.background = colimput.value
    colorControl()
})

cards.forEach( elem => {
    elem.addEventListener('click',  () => {
        cards.forEach( i => i.classList.remove('active'))
        elem.classList.add('active')
    })
})

function colorControl(){
    if( chroma(document.body.style.background).luminance() < 0.5 ){
        console.log( `<0.5`);
        document.body.style.color = 'white'
    }else{
        console.log(`>0.5`);
        document.body.style.color = 'black'
    }
}
    

navli.forEach( li => li.addEventListener('click', () => {
    navli.forEach( i => i.classList.remove('red') )
    li.classList.add('red') 
}))