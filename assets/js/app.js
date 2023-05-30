var app = document.getElementById('app');

console.log(app)

app.innerHTML=`
    
    <header> </header>

    <div id="full-banner"> </div>
    
    <div id="about">

        <div class="container">
            <img class="brain sm-hidden" src="assets/img/brain.png">
             
            <div class="content-text">
                <span class="element">DIGITAL HARMONY</span>
                <h3>CRIE, DESENVOLVA E CONQUISTE A COMUNICAÇÃO IDEAL PARA NOVOS CLIENTES.</h3>
                <button class="btn primary">
                    <a href="https://api.whatsapp.com/send?phone=5512981021517&text=%" target="_black">Falar com especialista<i class="fa-regular fa-comments"></i></a>
                </button> 
            </div>
   
                <img class="xs-hidden promoter" src="assets/img/promoter.png">
         
        </div>
        
    
    </div>

    <div id="jobs"> 
        <div class="container">
            <div class="content-text">
                <span class="element">DIGITAL HARMONY</span>
                <h3>ENCONTRE PRODUTOS IDEAIS PARA UMA COMUNICAÇÃO EFICIENTE.</h3>
            </div>
            <button class="btn primary xs-hidden">
                <a href="https://api.whatsapp.com/send?phone=5512981021517&text=%" target="_black">Falar com especialista<i class="fa-regular fa-comments"></i></a>
            </button> 
        </div>

        <div class=" " style="
        width: 100%;
    ">

            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"> 
                            <img class="sm-hidden" src="assets/img/app-mockup.png">
                            <img class="xs-hidden" src="assets/img/app-sm.png"> 
                    </div> 
                    <div class="swiper-slide"> 
                            <img class="sm-hidden" src="assets/img/app-mockup.png">
                            <img class="xs-hidden" src="assets/img/app-sm.png"> 
                    </div> 
                </div>
            </div> 
             
            <button class="btn primary sm-hidden">
                <a href="https://api.whatsapp.com/send?phone=5512981021517&text=%" target="_black">Falar com especialista<i class="fa-regular fa-comments"></i></a>
            </button> 
        </div> 

    </div>


    `;