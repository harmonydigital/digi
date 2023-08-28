var btnConvert=btnGetMsg=document.querySelectorAll('.convert-btn') 
const arr = Array.from(btnConvert);
const modal=document.getElementById('modal')
const modalBody=document.getElementById('modal-body')

var mousePos = {};


toggleModal=()=>{
    modal.classList.toggle('show')
  

    // modal.style.left = mousePos.x + "px"; // set the modal position to the last stored position
     modalBody.style.top = mousePos.y + "px";
     modalBody.style.position = "fixed";
}
arr.map((el)=>{
    el.addEventListener('click',(e)=>{
        e.preventDefault()   
        var rect = e.target.getBoundingClientRect(); // get some poition, scale,... properties of the item
        mousePos.x = e.clientX - rect.left; // get the mouse position relative to the element
        mousePos.y = e.clientY - rect.top;
      

        return toggleModal()
        
    })
})


 