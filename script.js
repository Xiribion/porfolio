let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("C");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("Java");
        habilidades[3].classList.add("Python");
        habilidades[4].classList.add("MySQL");
        habilidades[5].classList.add("GitHub");
        habilidades[6].classList.add("Springboot");
        habilidades[7].classList.add("API");
        habilidades[8].classList.add("MavenRES");
        
    }
}


//Detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//Boton de copia del email
function copiarUrl(){
    let url=document.getElementById('url');
    let button=document.getElementById('copy');

    navigator.clipboard.writeText(url.textContent);
}