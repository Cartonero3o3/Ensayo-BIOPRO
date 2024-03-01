const imgElements = document.getElementsByClassName("img");
const imgIguales = document.getElementsByClassName("imgD");
let clickCorrecto = document.getElementsByClassName("contadorIgual")[0];
let clickIncorrecto = document.getElementsByClassName("contadorIncorrecto")[0];
let ultimoClickeado= null;
let contadorCorrecto = 0;
let contadorIncorrecto = 0;

/*
http://127.0.0.1:5500/index.html
*/
for (let i = 0; i < imgElements.length; i++) {
    // El addEventListener escucha constantemente si uno de los elementos de la izquierda fue clickeado
    imgElements[i].addEventListener('click', () => {
        // Se asigna el valor del elemento clickeado a ultimoClickeado
        ultimoClickeado = imgElements[i]
    });
}

//Este for lo que hace es recorrer todas las img que estan a la derecha que fueron nombradas como "imgIguales"
for (let j = 0; j < imgIguales.length; j++) {
    //Esta linea de abajo escucha cuando se clikee los cuadraditos derechos 
    imgIguales[j].addEventListener('click', () => {
            //En eseste if se pregunta iultimo cliceado tiene algo guardado, y despues se pregunta si el nuevo clikeado es igual al ultimo clikeado
        if (ultimoClickeado !== null && imgIguales[j].id === ultimoClickeado.id) {
            imgIguales[j].style.opacity = 0;
            imgElements[j].style.opacity = 0;
            contadorCorrecto++;
            clickCorrecto.innerText = `Clics Iguales: ${contadorCorrecto}`;
            setTimeout(() => {
                imgIguales[j].style.display = "none";
                imgElements[j].style.display = "none";
            }, 500);
        } else {
            contadorIncorrecto++;
            clickIncorrecto.innerText = `Clics Incorrectos: ${contadorIncorrecto}`;
        }
    });
}