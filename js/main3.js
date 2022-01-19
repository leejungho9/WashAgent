


window.addEventListener('scroll', _.throttle(function (){
    console.log(window.scrollY);
    if(scrollY < 600) {
        gsap.to( document.querySelector('header'), .1, {
           display : 'block',
           background: 'inherit' 
           
        })
        
    } else {
        gsap.to( document.querySelector('header'), .1, {
            backgroundColor : '#999999'
         })
         
    }
}));


let border = document.querySelector(".border");
console.log(border)
function tab1() {
    border.style.transform = 'translateX(0)';
}
function tab2() {
    border.style.transform = 'translateX(125px)';
}
function tab3() {
    border.style.transform = 'translateX(245px)';
}
function tab4() {
    border.style.transform = 'translateX(360px)';
}

const tabs = document.querySelectorAll("[data-tab-target]");
const tabcon = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);

        tabcon.forEach((tabc_all) => {
            tabc_all.classList.remove("active");
        });
        target.classList.add("active");
       
    })
})

let btn = document.querySelectorAll('.tab')
console.log(btn)

for (let i = 0; i< btn.length; i++) {
    btn[i].addEventListener('click', function () {
        for(var j= 0; j <btn.length; j++) {
            btn[j].classList.remove("active");
        }
        this.classList.add("active");
    })
} 