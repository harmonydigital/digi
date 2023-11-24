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
    <header  id="top">
   <div class='brand'><a href='index.html'><img class='logo' src='assets/img/beija.png'></a></div>
   <div class='menu'>
      <button onclick='menutoggleMenu()' class='btn-menu'>
      <i class="fa-solid fa-bars"></i>
      </button>
      <nav>
         <div class='controls' onclick='closeMenu()' >
            <button>
               <svg class="svg-inline--fa fa-chevron-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
                  <path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
               </svg>
            </button>
            <button onclick='closeMenu()' >
               <svg class="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                  <path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path>
               </svg>
            </button>
         </div>
         <ul>
            <li class='iten-dropdown' style='display:none' >
               <a href=' javascript:void(0)'>Serviçosa</a>
               <div class='dropdown'>
                  <ul>
                     <li>
                        <a href='https://harmonydigital.github.io/ecommercelive/' target='_blank' >E-commerce <i class="fa-solid fa-arrow-right"></i></a>
                     </li>
                  </ul>
               </div>
            </li>
            <li>
               <a href='#details'>Serviços</a>
            </li>
            <li>
               <a href='#portfolio'>Galeria</a>
            </li>
             <li style='display:none'>
               <a href='#planos'>Planos</a>
            </li>
            <li>
               <a href='#about'>Sobre</a>
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
         <a class='btn-down' href='#details'>
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
   <div class="details" id='details'>
      <div class="container-flex">
         <div class="">
            <div class="content-text">
               <span class="title"></span>
               <h2>Produtos que resolvem.</h2>
            </div>
            <img src='assets/img/cover2.png'> 
         </div>
         <div class="">
            <div class="card-container">
               <!-- CARD' -->
               <div class="card" style='background-color:#D2FCFF'>
                  <div class="card-header">
                     <i class="fa-solid fa-microchip"></i> Landing Pages
                  </div>
                  <div class="card-body">
                     <p>
                        Paginas inteligentes prometem cumprir tarefas e ajuda-lo com seus leads. 
                     </p>
                  </div>
               </div>
               <!-- CARD' -->
               <div class="card">
                  <div class="card-header">
                     <i class="fa-solid fa-microchip"></i> E-commerce
                  </div>
                  <div class="card-body">
                     <p>Faça a gestão de produtos, transações de pagamentos sem mensalidades. </p>
                  </div>
               </div>
               <!-- CARD' -->
               <div class="card">
                  <div class="card-header">
                     <i class="fa-solid fa-microchip"></i> Branding
                  </div>
                  <div class="card-body">
                     <p>Seu material de comunicação, inclusive logo marca, tipografia e padrões de cores originais. </p>
                  </div>
               </div>
               <!-- CARD' -->
               <div class="card">
                  <div class="card-header">
                     <i class="fa-solid fa-microchip"></i>Mídias sociais
                  </div>
                  <div class="card-body">
                     <p>Crie seu cronograma de marketing digital, mantenha frequencia com Design original. </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div style="  margin: 0 auto ;
         display: flex;
         ">
         <a class="  btn primary convert-btn " href="#contact">
         <span>Conte sua história</span>
         </a>
      </div>
   </div>
   <div class='portfolio' id='portfolio'>
      <div class='text-content'>
         <span class='title'></span>
         <h3>Galeria Portfólio</h3>
      </div>
      <div class='tabs-portfolio'>
         <div class="tab">
            <button class="tablinks" onclick="openCity(event, 'apps','folio')">Tecnologia</button>
            <button class="tablinks" onclick="openCity(event, 'brand','folio')">Branding</button>
            <button class="tablinks" onclick="openCity(event, 'social','folio')">Social Media</button>
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
                                 <h4>Web Site Prianti</h4>
                                 <p>App Institucional com descrição dos serviços prestados.</p>
                                 <a class='get-site' target='_blank' href='https://harmonydigital.github.io/ativacred/'>
                                 visite este site
                                 <i class="fa-solid fa-arrow-right"></i>
                                 </a>
                              </div>
                              <span>
                              <i class="fa-solid fa-chevron-down"></i>
                              </span>
                           </div>
                        </div>
                        <img class='logo' src='assets/img/prianti.png'>
                     </div>
                     <div class="swiper-slide">
                        <div class='overlaygallery'>
                           <div class='text-content'>
                              <span>
                              <i class="fa-regular fa-heart"></i>
                              </span>
                              <div>
                                 <h4>Magic Journey</h4>
                                 <p>Loja Woocommerce integração de pagamentos e calculo de frete.</p>
                                 <a class='get-site' target='_blank' 
                                    href='https://magicjourney.rf.gd/'>visite este site
                                 <i class="fa-solid fa-arrow-right"></i>
                                 </a>
                              </div>
                              <span>
                              <i class="fa-solid fa-chevron-down"></i>
                              </span>
                           </div>
                        </div>
                        <img class='logo' src='assets/img/magicjourney.png'>
                     </div>
                     <div class="swiper-slide">
                        <div class='overlaygallery'>
                           <div class='text-content'>
                              <span>
                              <i class="fa-regular fa-heart"></i>
                              </span>
                              <div>
                                 <h4>E-commerce Tudo Praela</h4>
                                 <p>Loja Woocommerce integração de pagamentos e calculo de frete.</p>
                                 <a class='get-site' target='_blank' 
                                    href='https://tudopraela.infinityfreeapp.com/'>visite este site
                                 <i class="fa-solid fa-arrow-right"></i>
                                 </a>
                              </div>
                              <span>
                              <i class="fa-solid fa-chevron-down"></i>
                              </span>
                           </div>
                        </div>
                        <img class='logo' src='assets/img/tudopraela.png'>
                     </div>
                     <div class="swiper-slide">
                        <div class='overlaygallery'>
                           <div class='text-content'>
                              <span>
                              <i class="fa-regular fa-heart"></i>
                              </span>
                              <div>
                                 <h4>Web Site Hotel</h4>
                                 <p>app capta e armazena dados de pessoas para reservas de apartamentos na praia.</p>
                                 <a class='get-site' target='_blank' 
                                    href='https://sundaystore.infinityfreeapp.com/'>visite este site
                                 <i class="fa-solid fa-arrow-right"></i>
                                 </a>
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
                                 <a class='get-site' target='_blank' 
                                    href='https://harmonydigital.github.io/outlabs/'>visite este site
                                 <i class="fa-solid fa-arrow-right"></i>
                                 </a>
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
                                 <a class='get-site' target='_blank' 
                                    href='https://harmonydigital.github.io/registercard/'>visite este site
                                 <i class="fa-solid fa-arrow-right"></i>
                                 </a>
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
                                 <a class='get-site' target='_blank' 
                                    href='https://harmonydigital.github.io/beachbar/'>visite este site
                                 <i class="fa-solid fa-arrow-right"></i>
                                 </a>
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
                                 <h4>App ADM Pedidos na Praia</h4>
                                 <p>app gerência pedidos em tempo real, calcula mostra faturamento do dia.</p>
                                 <a class='get-site' target='_blank' href='https://harmonydigital.github.io/admbeach/'>
                                 visite este site
                                 <i class="fa-solid fa-arrow-right"></i>
                                 </a>
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
         <div id="brand" class="tabcontent">
            <div class='slide' id='brand'>
               <!-- Swipesr -->
               <div class="swiper mySwiper">
                  <div class="swiper-wrapper">
                     <div class="swiper-slide">
                        <div class='overlaygallery'>
                           <div class='text-content'>
                              <span>
                              <i class="fa-regular fa-heart"></i>
                              </span>
                              <div>
                                 <h4>Branding Evolution </h4>
                                 <p> Conjunto publicitário da marca para Negócios.</p>
                                 <a class='get-site' target='_blank' 
                                    href='#'>visite este site
                                 <i class="fa-solid fa-arrow-right"></i>
                                 </a>
                              </div>
                              <span>
                              <i class="fa-solid fa-chevron-down"></i>
                              </span>
                           </div>
                        </div>
                        <img class='logo' src='assets/img/produtos/brand/evolution.png'>
                     </div>
                     <div class="swiper-slide">
                        <div class='overlaygallery'>
                           <div class='text-content'>
                              <span>
                              <i class="fa-regular fa-heart"></i>
                              </span>
                              <div>
                                 <h4>Branding app Quero pizza</h4>
                                 <p>WebApp Restaurante Quero Pizza delivery.</p>
                                 <a class='get-site' target='_blank' 
                                    href='https://harmonydigital.github.io/queropizza/'>visite este site
                                 <i class="fa-solid fa-arrow-right"></i>
                                 </a>
                              </div>
                              <span>
                              <i class="fa-solid fa-chevron-down"></i>
                              </span>
                           </div>
                        </div>
                        <img class='logo' src='assets/img/produtos/brand/brand-queropizza.png'>
                     </div>
                     <div class="swiper-slide">
                        <div class='overlaygallery'>
                           <div class='text-content'>
                              <span>
                              <i class="fa-regular fa-heart"></i>
                              </span>
                              <div>
                                 <h4>Branding TUDOPRAELA.COM.BR</h4>
                                 <p>Padrões de design de marca para e-commerce Tudo pra ela.</p>
                                 <a class='get-site' target='_blank' 
                                    href='https://tudopraela.infinityfreeapp.com/'>visite este site
                                 <i class="fa-solid fa-arrow-right"></i>
                                 </a>
                              </div>
                              <span>
                              <i class="fa-solid fa-chevron-down"></i>
                              </span>
                           </div>
                        </div>
                        <img class='logo' src='assets/img/produtos/brand/sacola-tudopraela.png'>
                     </div>
                     <div class="swiper-slide">
                        <div class='overlaygallery'>
                           <div class='text-content'>
                              <span>
                              <i class="fa-regular fa-heart"></i>
                              </span>
                              <div>
                                 <h4>Brand Reservei</h4>
                                 <p>Padrões de design de marca para app de reservas.</p>
                                 <a class='get-site' target='_blank' 
                                    href='http://sundaystore.infinityfreeapp.com/'>visite este site
                                 <i class="fa-solid fa-arrow-right"></i>
                                 </a>
                              </div>
                              <span>
                              <i class="fa-solid fa-chevron-down"></i>
                              </span>
                           </div>
                        </div>
                        <img class='logo' src='assets/img/produtos/brand/brand-reservei.png'>
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
                     <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/media10.png'></div>
                     <div class="swiper-slide"><img class='logo' src='assets/img/produtos/socialmedia/mentoria_cacino.png'></div>
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
   </div>
   </div>
   </div> 
   <div id="planos" style='display:none'>
      <div class="text-content">
         <span class="title"></span>
         <h2>Planos e Vantagens</h2>
      </div>
      
      <div class="tabscontain">
         <div class="tab">
            <button class="tablinksPlans" onclick="openCity(event, 'lpage')">Landing Page</button>
            <button class="tablinksPlans" onclick="openCity(event, 'ecommercecont')">E-commerce</button>
         </div>
         <div id="lpage" class="tabcontentPlans">
            <div class="tabs-portfolio">
               <div class="card-container">
                  <div class="card">
                     <div class="card-header">
                        <h3>Básico</h3>
                     </div>
                     <div class="card-body">
                        <div class="card-price"> 
                           <span>R$</span>
                           <span>1.999</span>
                           <span>,00</span> 
                        </div>
                        <div class="plansHighlights">
                           <p>Arquitetura de Informação </p>
                           <p>SSL Grátis</p>
                           <p>Painel Administrativo</p>
                           <p> Direcionamento via whatsapp</p>
                        </div>
                     </div>
                     <div class="card-footer">
                        <button>Comprar Pacote</button>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-header">
                        <h3>Iniciante</h3>
                     </div>
                     <div class="card-body">
                        <div class="card-price"> 
                           <span>R$</span>
                           <span>1.999</span>
                           <span>,00</span> 
                        </div>
                        <div class="plansHighlights">
                           <p>Arquitetura de Informação </p>
                           <p>SSL Grátis</p>
                           <p>Painel Administrativo</p>
                           <p> Direcionamento via whatsapp</p>
                        </div>
                     </div>
                     <div class="card-footer">
                        <button>Comprar Pacote</button>
                     </div>
                  </div>
                  <div class="card">
                     <div class="card-header">
                        <h3>Profissional</h3>
                     </div>
                     <div class="card-body">
                        <div class="card-price"> 
                           <span>R$</span>
                           <span>1.999</span>
                           <span>,00</span> 
                        </div>
                        <div class="plansHighlights">
                           <p>Arquitetura de Informação </p>
                           <p>SSL Grátis</p>
                           <p>Painel Administrativo</p>
                           <p> Direcionamento via whatsapp</p>
                        </div>
                     </div>
                     <div class="card-footer">
                        <button>Comprar Pacote</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="ecommercecont" class="tabcontentPlans">
            ecommerce
         </div>
      </div>
   </div>
   <div class='harmonyabout' id='about'>
      <div class='container-flex'>
         <div class='content-text'>
            <span class='title'></span>
            <h3>produtos
               para pessoas,
               como eu e você.
            </h3>
            <a class='anchor btn primary convert-btn h-xs' href='#about'>
            <span>Fale comigo</span>
            <i class="fa-brands fa-whatsapp"></i>
            </a>
         </div>
         <div>
            <p>Harmony se traduz na eficiente interação entre produtos e pessoas.
               </br></br>Somos a estreita relação do homem e tecnologia, amamos criar soluções reais para tornar a vida de pessoas ainda
               melhor.
               </br></br>Unimos um grupo de profissionais do Design, para conversas sobre o comportamento humano e como a interação de alguns produtos podem ser tão relevantes, assim projetar novos modelos e testar novas soluções.
               </br></br>Aqui tudo começa na relação de pessoa para pessoa, criamos uma conexão com o interlocutor e então podemos entender como o Design pode solucionar e otimizar nossa vida enquanto seres humanos.
               Veja o que fizemos até aqui, e crie algo novo você também..
            </p>
         </div>
      </div>
   </div>
   </div>
   </div>
   </div>
</main>
    `
}
app ? initapp() : console.log('err')