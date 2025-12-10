//Preparazione

//selezioniamo i tag html che ci interessano
const lamp = document.querySelector('img');
const btn = document.querySelector('button');
const warningTitle = document.getElementById('warning');


//quando viene fatto un click sul bottone
 btn.addEventListener("click",
    function () {
        if( btn.innerText.includes('Spegni')){
            lamp.src = "./img/white_lamp.png";
            lamp.alt = "lampadina spenta";
            btn.innerText = "Accendi";
            btn.style.backgroundColor = 'transparent';
            btn.className = 'off';
            warningTitle.classList.remove('active');
            
            
        } else {
            lamp.src = "./img/yellow_lamp.png";
            lamp.alt = "lampadina accesa";
            btn.innerText = "Spegni";
            btn.style.backgroundColor = 'red';
            btn.className = 'on';
            energySaving();
        }
    }
 )

 
 function energySaving() {
    const currentTime = new Date();
    const currenthours = currentTime.getHours();
    if (currenthours > 6 && currenthours < 17){
        alert("Attenzioneeeee.....non serve accendere la lampadina, apri la tapparella, fuori c'è il sole");
        warningTitle.classList.add('active');
    } 
 }