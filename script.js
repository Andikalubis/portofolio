let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("php");
        habilidades[2].classList.add("mysql");
        habilidades[3].classList.add("htmlcss");
        habilidades[4].classList.add("adobe");
        habilidades[5].classList.add("comunication");
        habilidades[6].classList.add("team");
        habilidades[7].classList.add("creativitas");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
} 