// Dato un array contenente una lista di cinque immagini
// Creare un carosello


/*
- preparare un array  di immagini
- preparare gli elementi in js corrispondenti agli elementi html
- memorizzare una variabile di indice
-> alla pressione del pulsante "top"
  ° aumentare il valore dell'indice di un'unità
  ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
-> alla pressione del pulsante "bottom"
  ° diminuire il valore dell'indice di un'unità
  ° mostrare l'immagine alla posizione dell'array relativa al valore dell'indice
*/



const images =["img/01.webp", "img/02.webp", "img/03.webp" , "img/04.webp" , "img/05.webp"];



const topArrowElement = document.getElementById("top-arrow");
const bottomArrowElement = document.getElementById("bottom-arrow");
const activeImgElement = document.getElementById("carousel-img");
const asideContainerElement = document.getElementById("aside-container");


for(let i = 1; i < images.length + 1 ; i++) {
    // genero un elemento html di tag <div>
    let newImage = document.createElement("img");
    newImage.src = "img/0" + i + ".webp";
    asideContainerElement.append(newImage);
    newImage.classList.add("imageAside");
    newImage.alt = "image aside";
    newImage.style.height = `calc(100% / ${images.length}) `;

    
}

let index = 0;

const imageAsideElements = document.querySelectorAll(".imageAside");

imageAsideElements[index].classList.add("active");

activeImgElement.src = images[index];


topArrowElement.addEventListener("click", function () {

    imageAsideElements[index].classList.remove("active");

    
    if(index == images.length - 1){
        index = 0 - 1;

    }

    index++;

    activeImgElement.src = images[index];


    imageAsideElements[index].classList.add("active");
  
    console.log(index);




});


bottomArrowElement.addEventListener("click", function () {
    imageAsideElements[index].classList.remove("active");


    if(index == 0){
        index = images.length - 1;
    }else{
        index--;
    }

    

    imageAsideElements[index].classList.add("active");
    
    
    activeImgElement.src = images[index];
  
    console.log(index)
  
   

});