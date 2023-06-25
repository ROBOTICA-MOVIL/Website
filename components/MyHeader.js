class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div>
            <nav class="desk">
                <ul>
                    <li><a href="index.html"><img src="img/EsdekLogo.png" alt="Esdek Logo" class="Esdeklogo"></a></li>
                    <li><a href="PresentacionProyecto.html"><button>Presentación del Proyecto</button></a></li>
                    <li><a href="Materiales.html"><button>Materiales</button></a></li>
                    <li><a href="Procedimiento.html"><button>Procedimiento</button></a></li>
                    <li><a href="Resultados.html"><button>Resultados</button></a></li>
                </ul>
            </nav>
        </div>
        <div>
            <nav class="mob">
                <ul>
                    <li><a href="index.html"><img src="img/EsdekLogo.png" alt="Esdek Logo" class="Esdeklogo"></a></li>
                    <li><a href="#" onclick="displayMenu()"><img src="img/menu_icon.png" alt="Menu Icon" class="MenuIcon"></a></li>
                </ul>
            </nav>
        </div>
        <div>
               <ul id="list" class="dropdown-menu-mob-pc">
                <li><a href="PresentacionProyecto.html">Presentación del Proyecto</a></li>
                <li><a href="Materiales.html.html">Materiales</a></li>
                <li><a href="Procedimiento.html">Procedimiento</a></li>
                <li><a href="Resultados.html">Resultados</a></li>
            </ul>
        </div>
        `;
    }
}
customElements.define('header-custom', Header);

const list = document.getElementById("list");
list.style.display = "none";
const list2 = document.getElementById("list2");
list2.style.display = "none";
const list3 = document.getElementById("list3");
list3.style.display = "none";

function displayMenu(){
    if(list.style.display=="none"){
        list.style.display = "block";
    }else{
        list.style.display = "none";
    }
}
function displayMenu2(){
    if(list2.style.display=="none"){
        list2.style.display = "block";
    }else{
        list2.style.display = "none";
    }
}
function displayMenu3(){
    if(list3.style.display=="none"){
        list3.style.display = "block";
    }else{
        list3.style.display = "none";
    }
}
