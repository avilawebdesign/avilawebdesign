window.addEventListener("scroll",function(){

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(5,18,35,.97)";
header.style.boxShadow="0 10px 35px rgba(0,0,0,.25)";

}else{

header.style.background="rgba(7,27,51,.90)";
header.style.boxShadow="none";

}

});
