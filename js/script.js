//Preparazione

//selezioniamo i tag html che ci interessano
const lamp = document.querySelector('img');
const btn = document.querySelector('button');

console.log(lamp, btn);//Verifico selezioni

//quando viene fatto un click sul bottone
 btn.addEventListener("click",
    function () {
        if( lamp.classList.contains("on")){
            lamp.classList.remove("on");
            lamp.src = "./img/white_lamp.png";
            lamp.alt = "lampadina spenta";
        } else {
            lamp.classList.add("on");
            lamp.src = "./img/yellow_lamp.png";
            lamp.alt = "lampadina accesa";
        }
    }
 )