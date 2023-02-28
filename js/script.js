// Dato un array contenente una lista di cinque immagini
// Creare un carosello


/*
- preparare un array  di immagini
- preparare gli elementi in js corrispondenti agli elementi html
- memorizzare una variabile di indice
-> alla pressione del pulsante "top"
  ° aumentare il valore dell'indice di un'unità
  ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
-> alla pressione del pulsante "sinistra"
  ° diminuire il valore dell'indice di un'unità
  ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
*/



const images =["img/01.webp", "img/02.webp", "img/03.webp" , "img/04.webp" , "img/05.webp"];



const topArrowElement = document.getElementById("top-arrow");
const bottomArrowElement = document.getElementById("bottom-arrow");
const activeImgElement = document.getElementById("carousel-img");

let index = 0;

activeImgElement.src = images[index];


topArrowElement.addEventListener("click", function () {
    if(index >= 4){
        index = 0 - 1;
    }

    index++;
  
  
    
    activeImgElement.src = images[index];
  
    console.log(index);

});


bottomArrowElement.addEventListener("click", function () {
    if(index <= 0){
        index = 4 + 1;
    }
    index--;
  
  
    
    activeImgElement.src = images[index];
  
    console.log(index)
  

});