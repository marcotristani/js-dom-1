//Preparazione

//selezioniamo i tag html che ci interessano
const lamp = document.querySelector('img');
const btn = document.querySelector('button');

console.log(lamp, btn);//Verifico selezioni

//quando viene fatto un click sul bottone
btn.addEventListener("click",
    function () {
        lamp.src = "./img/yellow_lamp.png";         //allora l'immagine cambierà con l'immagine della lampadina accesa
        
    }
)

// se l'immagine presente è quella della lampadina accesa allora quando viene fatto un click sul bottone
//l'immagine cambierà con quella della lampadina spenta