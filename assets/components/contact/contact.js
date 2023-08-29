const iname=document.getElementById('iname')
const imail=document.getElementById('imail')
const iwhats=document.getElementById('iwhats')
const imsg=document.getElementById('imsg')
const submitbtn=document.getElementById('submitbtn')
var returnSend=document.getElementById('returnSend')


getAlertSend=()=>{
    returnSend.classList.toggle('show')
    submitbtn.style.cssText='opacity:0.3'
    submitbtn.setAttribute('disable',true)
}


const btnOK=document.querySelector('.footer-controls button')


btnOK.addEventListener('click',()=>{
    var returnSend=document.getElementById('returnSend')
    returnSend.classList.toggle('show')

     
    setTimeout(() => {
        location.reload()
      }, 1000);
})
