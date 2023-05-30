var header = document.getElementsByTagName('header')[0]

header.innerHTML=`
    <div class="container">
        <div class="logo"> 
            <img src="assets/img/logo.png">
        </div>

        <div style="display: flex;    justify-content: space-between;  align-items: center;">
            <div id="menu" class="menu"> </div>  

            <div class="xs-hidden">
            <button class="btn primary">
            <a href="https://api.whatsapp.com/send?phone=5512981021517&text=%" target="_black">Fale Agora  <i class="fa-regular fa-comments"></i></a>

            </button>
            
            
            </div>
        </div>
    </div>
    
    
    

`;


