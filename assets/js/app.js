const app = document.getElementById('app')
relogio=()=>{
    containerDate=document.getElementById('relogio')
    const data=new Date()
    let hr=data.getHours()
    let mn=data.getMinutes()
    let ms=data.getSeconds()


    let horaatual=hr+":"+mn+":"+ms
    // console.log(horaatual)

    if(containerDate){
        containerDate.innerHTML=`<h5>Horário de Brasília `+horaatual+`</h5>`
    }

    return horaatual
}  
initapp=()=>{
    app.innerHTML=`
        <header>
            <div class='brand'><a href='index.html'><img class='logo' src='assets/img/beija.png'></a></div>
            <div class='menu'>

                <nav>
                    <ul>
                        <li>
                            <a href='#portfolio'>Galeria</a>
                        </li>
                       
                        <li>
                            <a href='#about'>Sobre</a>
                        </li>
                        <li>
                            <a href='#contact'>Contato</a>
                        </li>
                        <li>
                            <a class='btn primary convert-btn' href="">
                                <span>Fale comigo</span>
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </li>
                        <li>
                            <a class='btn inline' href="https://github.com/harmonydigital/harmonywebsites" target='_blank'>
                                <span>v1.0</span>
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            
        </header>

        <main> 
                <div class='display'> 
                        <div class='content-text'>
                            <span class='title'>Harmony</span>
                            <h1>Visível, leve e intuitivo.</h1>
                            <h2>ative a criatividade, comece algo novo</br>  agora mesmo...</h2>
                            <a class='btn-down' href='#about'>
                                <i class="fa-solid fa-chevron-down"></i>
                            </a>
                        </div>
                        <div class='social'>
                            <a class='' href='https://www.instagram.com/harmonydigitalflow/'  target="_blank">    
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            
                            <a class='' href="https://www.linkedin.com/in/harmony-digital/" target="_blank">
                              <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a class='' href="https://github.com/harmonydigital" target="_blank" > 
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </div>


                </div>

                <div class='harmonyabout' id='about'>
                    <div class='container-flex'>
                        <div class='content-text'>
                        <span class='title'></span>
                        <h2>produtos
                        para pessoas
                        como eu e você.</h2>
                        <a class='anchor btn primary convert-btn h-xs' href='#about'>
                        <span>Fale comigo</span>
                                <i class="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>

                        <div>
                            <p>Harmony se traduz na eficiente interação, entre produtos e pessoas.
                            </br></br>Somos a estreita relação do homem e tecnologia.
                            Amamos criar soluções reais e tornar a vida de pessoas ainda melhor através de soluções tecnologicas.
                            </br></br>Unimos um grupo de profissionais do Design, para conversas sobre o comportamento humano e como a interação de alguns produtos podem ser tão relevantes, assim projetar novos modelos e testar novas soluções.
                            </br></br>Aqui tudo começa na relação de pessoa para pessoa, criamos uma conexão com o interlocutor e então podemos entender como o Design pode solucionar e otimizar nossa vida enquanto seres humanos.
                            Veja o que fizemos até aqui, e crie algo novo você também..</p>
                        </div>
                  
                    </div>
                </div>

               <div class='portfolio' id='portfolio'>

                    <div class='text-content'>
                    <span class='title'></span>

                       <h3>Galeria Portfólio</h3>
                    </div>

                    <div class='tabs-portfolio'>

                        <div class="tab">
                            <button class="tablinks" onclick="openCity(event, 'apps')">Tecnologia</button>
                            <button class="tablinks" onclick="openCity(event, 'social')">Social Media</button>
                        </div>

                        <div id="apps" class="tabcontent"> 
                            <div class='slide' id='gallery'>

                                <div class="swiper tecnologia"> 
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class='overlaygallery'>
                                                            
                                                <div class='text-content'>  
                                                    <span>
                                                        <i class="fa-regular fa-heart"></i>
                                                    </span>
                                                    <div>
                                                        <h4>Web Site Hotel</h4>
                                                        <p>app capta e armazena dados de pessoas para reservas de apartamentos na praia.</p> 
                                                    </div>
                                                    <span>
                                                    <i class="fa-solid fa-chevron-down"></i>
                                                    </span>
                                                </div>
                                            
                                            </div>
                                
                                            <img class='logo' src='assets/img/modelo.png'>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class='overlaygallery'>
                                                    
                                                <div class='text-content'>  
                                                    <span>
                                                        <i class="fa-regular fa-heart"></i>
                                                    </span>
                                                    <div>
                                                        <h4>Web Site landing page Grupo Vip</h4>
                                                        <p>app capta e armazena dados de pessoas e as conecta a lista vip.</p> 
                                                    </div>
                                                    <span>
                                                    <i class="fa-solid fa-chevron-down"></i>
                                                    </span>
                                                </div>
                                            
                                            </div>
                                        
                                            <img class='logo' src='assets/img/modelo2.png'>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class='overlaygallery'>
                                              
                                                <div class='text-content'>  
                                                    <span>
                                                        <i class="fa-regular fa-heart"></i>
                                                    </span>
                                                    <div>
                                                        <h4>Web Site landing page Cartão</h4>
                                                        <p>app realiza cadastro de pessoas e armazena dados para cartão de crédito e envio de publicidade.</p> 
                                                    </div>
                                                    <span>
                                                    <i class="fa-solid fa-chevron-down"></i>
                                                    </span>
                                                </div>
                                             
                                            </div>
                                                <img class='logo' src='assets/img/modelo1.png'>
                                           

                                        </div>
                                        <div class="swiper-slide">
                                            <div class='overlaygallery'>
                                                
                                                <div class='text-content'>  
                                                    <span>
                                                        <i class="fa-regular fa-heart"></i>
                                                    </span>
                                                    <div>
                                                        <h4>App Delivery na Praia</h4>
                                                        <p>app realiza pedidos e entrega ao restaurante em tempo real na praia.</p> 
                                                    </div>
                                                    <span>
                                                    <i class="fa-solid fa-chevron-down"></i>
                                                    </span>
                                                </div>
                                            
                                            </div>
                                        
                                            <img class='logo' src='assets/img/modelo3.png'>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class='overlaygallery'>
                                                        
                                                <div class='text-content'>  
                                                    <span>
                                                        <i class="fa-regular fa-heart"></i>
                                                    </span>
                                                    <div>
                                                        <h4>App Delivery na Praia</h4>
                                                        <p>app gerencia pedidos em tempo real, calcula mostra faturamento do dia.</p> 
                                                    </div>
                                                    <span>
                                                    <i class="fa-solid fa-chevron-down"></i>
                                                    </span>
                                                </div>
                                            
                                            </div>
                                         <img class='logo' src='assets/img/modelo4.png'>
                                        </div>
                                    </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                   </div>

                        <div id="social" class="tabcontent">
                            
                          
                            <div class='slide' id='gallery'>
                            <!-- Swipesr -->
                            <div class="swiper mySwiper"> 
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media.png'></div>
                                    <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media1.png'></div>
                                    <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media2.png'></div>
                                    <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media3.png'></div>
                                    <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media4.png'></div>
                                    
                                </div>
                                <div class="swiper-pagination"></div>
                            </div>
                        </div>
                        
                    </div>

                    </div>

                    <!-- VIDEO -->
                    <div class='container-movie' hidden>
                        <div id='thismovie' class='thismovie'>
                            <span class='title'></span>
                            <h3>Crie Transforme</h3>
                            <div class="container">
                            <video poster="https://sb.vox1.net/video/poligonBG.jpg" playsinline autoplay muted loop>
                                <source src="assets/img/video.mp4" type="video/mp4">
                            </video>
                            <p class="text">HARMONY</p>
                        </div>
                    </div>


                 







                    </div>

                    
               </div>
        </main>


    `
}
app ? initapp() : console.log('err')