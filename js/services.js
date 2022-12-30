const menu = document.getElementById("pop-menu");
const iframe = document.getElementById("child-conteiner");


menu.addEventListener("click", function(event){
    let url =     event.target.slot + ".html";
    iframe.src = url;
    iframe.classList.remove('reveal')
    iframe.offsetWidth;
    iframe.classList.add('reveal');
})