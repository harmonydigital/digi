const sliders=document.querySelectorAll('.slide .swiper-slide')






var arrElements=Array.from(sliders)
 
arrElements.map((el)=>{



    if (window.matchMedia("(max-width: 1200px)").matches) { // If media query matches


        
            el.ontouchstart=()=>{
                console.log('touch')

            }
            el.ontouchend=()=>{
                console.log('touchEnd')

            }

      } else {
        
        console.log('desk')
            
            el.onmouseover=()=>{
                console.log('hover')

            }
            el.onmouseout=()=>{
                console.log('saiu')

            }
      }
})