const app = document.getElementById('app')

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
                            <p>Harmony se traduz na relação mais que eficiente, entre produto e pessoas.
                            </br></br>Somos a estreita relação do homem e tecnologia.
                            Amamos criar soluções reais, e tornar a vida de pessoas ainda melhor através da tecnologia.
                            Somos um grupo de profissionais do design.
                            Nós nos unimos, para falar sobre design, projetar novos modelos e testar novas soluções.
                            </br></br>Aqui tudo começa na relação de pessoa para pessoa, assim criamos um conexão com o interlocutor, onde podemos entender como o design pode solucionar ou otimizar sua vida.
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

                    <div class='contact' id='contact'>
                    <div class='container-flex'>
                        <div>
                            <span class='tittle'></span>
                            <h2>Contato</h2>
                            <form>
                                <div class='input'>
                                    <input type='text' placeholder='Digite seu nome'>
                                </div>
                                <div class='input'>
                                    <input type='email' placeholder='e-mail'>
                                </div>
                                <div class='input'>
                                    <input type='number' placeholder='Telefone whatsapp'>
                                </div>
                                <div class='area'>
                                <textarea type='number' placeholder='Digite sua mensagem'></textarea>
                              </div>
                              <a class="btn primary convert-btn" href="">
                              <span>Enviar agora</span>
                              <svg class="svg-inline--fa fa-whatsapp" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg><!-- <i class="fa-brands fa-whatsapp"></i> Font Awesome fontawesome.com -->
                          </a>
                            </form>
                        </div>
                        <div>
                            <h4>Vamos bater um papo, produtivo?</h4>
                            <p>Fale conosco agora, e conversaremos sobre soluções criativas e relevantes para seu negócio!</p>
                        </div>
                    </div>
                </div>
               </div>
        </main>

        <main>
        footer
        </main>
    `
}
app ? initapp() : console.log('err')