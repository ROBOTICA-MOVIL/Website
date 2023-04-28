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
                    <li><a href="Process_Content_Index.html"><button>Productos</button></a></li>
                    <li class="menu-btn">
                    <button>Menu</button>
                        <ul class="dropdown-menu">
                            <li class="pc-btn">
                            <button>Contenido de Producto</button>
                                <ul class="dropdown-menu-pc" id="list-pc">
                                    <li><a href="GestionDeProyecto.html">Gestión de proyecto</a></li>
                                    <li><a href="Production_Management.html">Gestión de Producción y automatización</a></li>
                                    <li><a href="AutomatizacioneIndustria40.html">Automatización e Industria 4.0</a></li>
                                    <li><a href="CeldaDeManufacturaRobotizada.html">Celda de Manufactura Robotizada</a></li>
                                    <li><a href="DigitalFactory.html">Digital Factory</a></li>
                                    <li><a href="ControladoresIndustriales.html">Controladores Industriales (PLC)</a></li>
                                        
                                    <li><a href="SCADA.html">Sistema de supervisión SCADA</a></li>
                                    <li><a href="EvaluacionEconomica.html">Evaluación Económica del proyecto</a></li>
                                </ul>
                            </li>
                            <li class="lpc-btn">
                            <button>Proceso de Aprendizaje</button>
                                <ul class="dropdown-menu-lpc">
                                    <li><a href="Learning_Process_Content_index.html">Proceso</a></li>
                                    
                                </ul>
                            </li>
                        </ul>                     
                    </li>
                    <li><a href="Nuestro_Equipo.html"><button>Nuestro equipo</button></a></li>
                    <li><a href="Docentes.html"><button>Docentes</button></a></li>
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
                <li><a href="Process_Content_Index.html">Productos</a></li>
                <li><a href="#" onclick="displayMenu2()">Contenido de Producto</a></li>
                    <ul id = "list2">
                        <li><a href="GestionDeProyecto.html">Gestión de proyecto</a></li>
                        <li><a href="Production_Management.html">Gestión de Producción y automatización</a></li>
                        <li><a href="AutomatizacioneIndustria40.html">Automatización e Industria 4.0</a></li>
                        <li><a href="CeldaDeManufacturaRobotizada.html">Celda de Manufactura Robotizada</a></li>
                        <li><a href="DigitalFactory.html">Digital Factory</a></li>
                        <li><a href="ControladoresIndustriales.html">Controladores Industriales (PLC)</a></li>  
                        <li><a href="SCADA.html">Sistema de supervisión SCADA</a></li>
                        <li><a href="EvaluacionEconomica.html">Evaluación Económica del proyecto</a></li>
                    </ul>
                <li><a href="#" onclick="displayMenu3()">Proceso de Aprendizaje</a></li>
                    <ul id="list3">
                        <li><a href="Learning_Process_Content_index.html">Proceso</a></li>
                        
                    </ul>
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
