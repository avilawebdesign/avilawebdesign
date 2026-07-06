/*=========================================
AVILA WEB DESIGN
SCRIPT.JS
=========================================*/

// HEADER AL HACER SCROLL

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,18,35,.97)";
        header.style.boxShadow = "0 12px 35px rgba(0,0,0,.30)";

    } else {

        header.style.background = "rgba(7,27,51,.82)";
        header.style.boxShadow = "none";

    }

});


// EFECTO AL PASAR EL RATÓN SOBRE LAS TARJETAS

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


// EFECTO EN LAS TARJETAS DEL PORTFOLIO

const trabajos = document.querySelectorAll(".trabajo");

trabajos.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateY(-12px)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "";

    });

});


// SCROLL SUAVE EN LOS ENLACES DEL MENÚ

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }
/*=========================================
ANIMACIONES AL HACER SCROLL
=========================================*/

const elementos = document.querySelectorAll(
".card, .trabajo, .paso, .stat, .cta, .formulario"
);

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity="1";
            entrada.target.style.transform="translateY(0)";
            observador.unobserve(entrada.target);

        }

    });

},{
    threshold:0.15
});

elementos.forEach((el)=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all .7s ease";

    observador.observe(el);

});


/*=========================================
BOTÓN VOLVER ARRIBA
=========================================*/

const botonTop = document.createElement("div");

botonTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

botonTop.style.position = "fixed";
botonTop.style.right = "30px";
botonTop.style.bottom = "120px";
botonTop.style.width = "55px";
botonTop.style.height = "55px";
botonTop.style.background = "#2F80ED";
botonTop.style.color = "white";
botonTop.style.display = "flex";
botonTop.style.justifyContent = "center";
botonTop.style.alignItems = "center";
botonTop.style.borderRadius = "50%";
botonTop.style.cursor = "pointer";
botonTop.style.fontSize = "20px";
botonTop.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
botonTop.style.opacity = "0";
botonTop.style.pointerEvents = "none";
botonTop.style.transition = ".3s";
botonTop.style.zIndex = "999";

document.body.appendChild(botonTop);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        botonTop.style.opacity="1";
        botonTop.style.pointerEvents="auto";

    }else{

        botonTop.style.opacity="0";
        botonTop.style.pointerEvents="none";

    }

});

botonTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
AÑO AUTOMÁTICO EN EL FOOTER
=========================================*/

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =
    `© ${new Date().getFullYear()} Avila Web Design · Todos los derechos reservados`;

}
    });

});
/*=========================================
EFECTO PARALLAX HERO
=========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    if(hero){

        hero.style.backgroundPosition = `center ${y*0.25}px`;

    }

});


/*=========================================
BOTONES CON EFECTO RIPPLE
=========================================*/

document.querySelectorAll(".boton").forEach((boton)=>{

    boton.addEventListener("click",function(e){

        const circulo=document.createElement("span");

        const diametro=Math.max(this.clientWidth,this.clientHeight);

        circulo.style.width=diametro+"px";
        circulo.style.height=diametro+"px";

        circulo.style.position="absolute";
        circulo.style.borderRadius="50%";
        circulo.style.background="rgba(255,255,255,.35)";
        circulo.style.transform="scale(0)";
        circulo.style.animation="ripple .6s linear";
        circulo.style.pointerEvents="none";

        const rect=this.getBoundingClientRect();

        circulo.style.left=(e.clientX-rect.left-diametro/2)+"px";
        circulo.style.top=(e.clientY-rect.top-diametro/2)+"px";

        this.appendChild(circulo);

        setTimeout(()=>{

            circulo.remove();

        },600);

    });

});


/*=========================================
PREVENIR ENVÍO DEL FORMULARIO
(HASTA CONECTARLO)
=========================================*/



/*=========================================
CONSOLE
=========================================*/

console.log("%cAvila Web Design","font-size:22px;color:#2F80ED;font-weight:bold;");
console.log("Web desarrollada por Avila Web Design.");
