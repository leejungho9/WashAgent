

// 헤더 이벤트
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

// menual 메뉴 클릭 이벤트(border)
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

// menual 메뉴에 따라 콘텐츠 바뀌는 이벤트
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

// 클릭된 메뉴는 색상 바꾸기
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

// 스크롤 텍스트 애니메이션

window.counter = function() {
	// this refers to the html element with the data-scroll-showCallback tag
	var span = this.querySelector('span');
	var current = parseInt(span.textContent);

	span.textContent = current + 1;
};

document.addEventListener('DOMContentLoaded', function(){
  var trigger = new ScrollTrigger({
	  addHeight: true
  });
});

window.onload = function(){
    const elm = document.querySelectorAll('.section');
    const elmCount = elm.length;
    elm.forEach(function(item, index){
      item.addEventListener('mousewheel', function(event){
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let elmSelector = elm[index];

        // wheel down : move to next section
        if (delta < 0){
          if (elmSelector !== elmCount-1){
            try{
              moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }
        
        // wheel up : move to previous section
        else{
          if (elmSelector !== 0){
            try{
              moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }

        const body = document.querySelector('html');
        window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
      });
    });
  }