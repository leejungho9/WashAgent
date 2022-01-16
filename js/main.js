


window.addEventListener('scroll', _.throttle(function (){
    console.log(window.scrollY);
    if(scrollY < 500) {
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