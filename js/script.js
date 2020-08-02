var previouscard = document.getElementById("About");
var menu = document.getElementById("menu").children;
var lastpreviouscard;
var currentcard;
function cardtoggle(item){
    currentcard = document.getElementById(item.children[1].innerHTML);
    for(var listitem of menu){
        listitem.classList.remove("active");
    }
    item.classList.add("active");
    if(currentcard != previouscard){
        if(lastpreviouscard)
            lastpreviouscard.classList.remove("fadeOut");
        if(previouscard)
            previouscard.classList.remove("fadeIn");
        previouscard.classList.add("fadeOut");
        currentcard.classList.add("fadeIn");
        lastpreviouscard = previouscard;
        previouscard = currentcard;
    }
    if(window.innerWidth <= 1100 ){
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
    if(window.innerWidth <= 1100 ){
        var offsetPosition = currentcard.offsetTop + document.getElementById('wrapper').offsetTop - 20;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}
window.addEventListener('resize',e=>{
    if(window.innerWidth <= 1100){
        for(var listitem of menu){
            listitem.classList.remove("active");
        }
    }
    else{
        for(var listitem of menu){
            if(listitem.classList.value != ""){
                var curr = listitem;
                break;
            }
        }
        if(curr)
            cardtoggle(curr);
        else
            cardtoggle(menu[0]);
    }
})

window.addEventListener('scroll',e=>{
    if(window.innerWidth <= 1100){
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


function addfocus(item){
    if(item.classList.value[0]!="focus")
        item.classList.add("focus");
}

function addblur(item){
    if(item.value ==""){
        item.classList.remove("focus");
    }
}

window.addEventListener('load',async e=>{
    var node  = document.getElementById("loader")
    node.classList.add('fadeOut'),300;
    var promise = await new Promise(r => setTimeout(r, 300));
    node.style.display="none";

})

function darktoggle(){
    var root = document.getElementsByTagName('html')[0];
    root.classList.toggle('dark');
    if(root.classList.value !=''){
        document.querySelector("meta[name='theme-color']").setAttribute("content","#31313a");
    }
    else{
        document.querySelector("meta[name='theme-color']").setAttribute("content","#7276d1");
    }
}

const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

if(userPrefersDark)
{
    var root = document.getElementsByTagName('html')[0];
    root.classList.add('dark');
}