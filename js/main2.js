const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

const container = document.querySelector('.container')

btn1.addEventListener('click' , function () {
    container.style.transform = "translate(0vw)"
    container.style.transition = "1s";
})  
btn2.addEventListener('click' , function () {
    container.style.transform = "translate(-100vw)"
})
btn3.addEventListener('click' , function () {
    container.style.transform = "translate(-200vw)"
})      