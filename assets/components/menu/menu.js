
const navObj=document.querySelector('nav')

menutoggleMenu=()=>{

      navObj.classList.toggle('show')
      console.log(navObj)

}   

closeMenu=()=>{

      navObj.removeAttribute('class')
      console.log('remove')

}   



