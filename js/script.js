//Preparazione

//selezioniamo i tag html che ci interessano
const lamp = document.querySelector('img');
const btn = document.querySelector('button');
const btntext = btn.innerText;
console.log(lamp, btn, btntext);//Verifico selezioni

//quando viene fatto un click sul bottone
 btn.addEventListener("click",
    function () {
        if( btn.innerText.includes('Spegni')){
            lamp.src = "./img/white_lamp.png";
            lamp.alt = "lampadina spenta";
            btn.innerText = "Accendi";
            btn.style.backgroundColor = 'transparent';
            btn.className = 'off';
            
        } else {
            lamp.src = "./img/yellow_lamp.png";
            lamp.alt = "lampadina accesa";
            btn.innerText = "Spegni";
            btn.style.backgroundColor = 'red';
            btn.className = 'on';
        }
    }
 )