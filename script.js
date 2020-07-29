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
function opencontacts(){
    currentcard = document.getElementById("Contact");
    if(currentcard != previouscard){
        for(var listitem of menu){
            listitem.classList.remove("active");
        }
        menu[4].classList.add("active");
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
    if(window.innerWidth <= 1000){
        var cards = document.getElementById('wrapper').children;
        var offsetPositions = [];
        for(var card of cards){
        offsetPositions.push( card.offsetTop+ document.getElementById('wrapper').offsetTop - (window.innerHeight/2));
        }
        for(var index=0;index<4;index++){
            if(scrollY >= offsetPositions[index] && scrollY < offsetPositions[index+1] ){
                for(var listitem of menu){
                    listitem.classList.remove("active");
                }
                menu[index].classList.add("active");
             
            }
            else if(scrollY >= offsetPositions[4]){
                for(var listitem of menu){
                    listitem.classList.remove("active");
                }
                menu[4].classList.add("active");
            }
            else if(scrollY<offsetPositions[0]){
                for(var listitem of menu){
                    listitem.classList.remove("active");
                }
            }
        }
    }
})