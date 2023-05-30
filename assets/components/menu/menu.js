const menu = document.getElementById("menu")


menuToggle=()=>{  
    const nav = document.querySelector('.nav')
     
    
if (window.matchMedia("(max-width: 768px)").matches) {
    /* a viewport tem pelo menos 400 pixels de largura */
    nav.classList.toggle("xs-hidden")

  } else {
    /* a viewport menos que 400 pixels de largura */
    fullbanner.style.cssText='background-image: url(assets/img/fulldesign.png);'

    nav.classList.toggle("sm-hidden")


  }
 
} 


menu.innerHTML = `

        <button onclick="menuToggle()">
            <img src="assets/img/menu-icon.png">

        </button>

        <div id="nav" class="nav xs-hidden sm-hidden"> 
            <div class="nav-header">
                <img src="assets/img/logo.png">
                <button onclick="menuToggle()"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>
            <ul>
            <li>
                <a class="nav-link" href="index.html">Pagina Inicial</a>
            </li>
            <li>
                <a class="nav-link" href="#">Web Design</a>
            </li>
            <li>    
                <a class="nav-link" href="#">Design Social Media</a>
            </li>
            </ul>

            <div class="socialmedia">
                <h6>Follow me baby</h6>
                <ul>
                    <li>
                        <a class="nav-link" href="#"><i class="fa-brands fa-instagram"></i></a>
                    </li>
                    <li>
                        <a class="nav-link" href="https://www.facebook.com/profile.php?id=100091804441284" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>    
                        <a class="nav-link" href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        
`;

