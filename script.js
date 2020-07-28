var previouscard = document.getElementById("About");
var menu = document.getElementById("menu").children;
var lastpreviouscard;
var currentcard;
function cardtoggle(item){
    currentcard = document.getElementById(item.children[1].innerHTML);
    if(currentcard != previouscard){
        for(var listitem of menu){
            listitem.classList.remove("active");
        }
        item.classList.add("active");
        if(lastpreviouscard)
            lastpreviouscard.classList.remove("fadeOut");
        if(previouscard)
            previouscard.classList.remove("fadeIn");
        previouscard.classList.add("fadeOut");
        currentcard.classList.add("fadeIn");
        lastpreviouscard = previouscard;
        previouscard = currentcard;
    }
    if(window.innerWidth <= 1000 ){
        var offsetPosition = currentcard.offsetTop + document.getElementById('wrapper').offsetTop - 20;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}
window.addEventListener('resize',e=>{
    if(window.innerWidth <= 1000){
        for(var listitem of menu){
            listitem.classList.remove("active");
        }
    }
})
window.addEventListener('scroll',e=>{
})