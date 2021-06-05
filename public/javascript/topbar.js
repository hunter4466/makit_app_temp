let ActionmenuButton = document.querySelector('button.topslidemenubtn')
let ActionmenuButton2 = document.querySelector('button.cerrarmenu')
let topbarbackground = document.getElementById('topbarbackgroundid')
let topbardisplay = document.getElementById('wholemenuid')

let button1 = document.getElementById('menubtnid1')
let button2 = document.getElementById('menubtnid2')
let button3 = document.getElementById('menubtnid3')
let button4 = document.getElementById('menubtnid4')
let button5 = document.getElementById('menubtnid5')
let button6 = document.getElementById('menubtnid6')

    ActionmenuButton.addEventListener('click',(event)=>{
        if(topbardisplay.className == "wholemenu"){
            event.preventDefault();
            topbardisplay.className = "wholemenuclose";
            button1.className = "menu1close";
            button2.className = "menu2close";
            button3.className = "menu3close";
            button4.className = "menu4close";
            button5.className = "menu5close";
            button6.className = "menu6close";
            topbarbackground.className = "topbarbackgroundclose";
            topbarbackground.style.display = "none";
            topbardisplay.style.display = "none";
            topbardisplay.style.display = "inline";
            window.scrollTo(0, 0);
        }
        else{
            event.preventDefault();
            topbardisplay.className = "wholemenu";
            button1.className = "menu1";
            button2.className = "menu2";
            button3.className = "menu3";
            button4.className = "menu4";
            button5.className = "menu5";
            button6.className = "menu6";
            topbarbackground.className = "topbarbackgroundopen";
            topbarbackground.style.display = "inline";
            topbardisplay.style.display = "none";
            topbardisplay.style.display = "inline";    
            window.scrollTo(0, 0);
        }
    })

    ActionmenuButton2.addEventListener('click',(event)=>{
            event.preventDefault();
            topbardisplay.className = "wholemenuclose"; 
            button1.className = "menu1close";
            button2.className = "menu2close";
            button3.className = "menu3close";
            button4.className = "menu4close";
            button5.className = "menu5close";
            button6.className = "menu6close";
            topbarbackground.className = "topbarbackgroundclose";
            topbarbackground.style.display = "none";
            topbardisplay.style.display = "none";
            topbardisplay.style.display = "inline";  
            window.scrollTo(0, 0);
    })
    
    topbarbackground.addEventListener('click',(event)=>{
        event.preventDefault();
        topbardisplay.className = "wholemenuclose"; 
        button1.className = "menu1close";
        button2.className = "menu2close";
        button3.className = "menu3close";
        button4.className = "menu4close";
        button5.className = "menu5close";
        button6.className = "menu6close";
        topbarbackground.className = "topbarbackgroundclose";
        topbarbackground.style.display = "none";
        topbardisplay.style.display = "none";
        topbardisplay.style.display = "inline";  
        window.scrollTo(0, 0);
})






const requestURL = "/JSON/order.JSON";
const request = new XMLHttpRequest;
request.open('GET',requestURL);
request.responseType = 'json';
request.send();

function consolelog(jsonObj){ // estea es la función que se quiere ejecutar
    const mostrarres = jsonObj['members'][0]['powers'][0] //aquí se accede al dato, para
                                                                                                            //hacer con la variable
                                                                                                            //lo que se necesite
    console.log("MOSTRARES",mostrarres)
}
function consolelog2(jsonObj){
    const dato2 = jsonObj['active']
    console.log(dato2)
}

//ejecutor de la funcion, se debe especificar la función que se va a ejecutar.
request.onload = function(){
    const consol = request.response
    //aquí se deben agregar todas las funciones que ponga arriba de esta para que se ejecuten
    consolelog(consol)
    consolelog2(consol)
    
}
 

