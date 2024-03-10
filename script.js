const imgElements = document.getElementsByClassName("Cuadrado");
const imgIguales = document.getElementsByClassName("CuadradoD");
const divsIzquierda = document.querySelectorAll('.Cuadrado');
const divsDerecha = document.querySelectorAll('.CuadradoD');
let clickCorrecto = document.getElementsByClassName("contadorIgual")[0];
let clickIncorrecto = document.getElementsByClassName("contadorIncorrecto")[0];
let mesclador = document.getElementById("mesclador"); 
let ultimoClickeado= null;
let contadorCorrecto = 0;
let contadorIncorrecto = 0;

/*
http://127.0.0.1:5500/index.html
*/

const listaIzquierda = {
    lista1: [
        {
            url: "public/img/celular.jpeg",
            value: '4'
        },
        {
            url:'public/img/compu.jpeg',
            value: '1'
        },
        {
            url:'public/img/pierna.jpeg',
            value: '2'
        },
        {
            url:'public/img/vaso.jpeg',
            value: '3'
        }
    ],
    lista2: [
        {
            url: "public/img/celularGod.jpeg",
            value: '4'
        },
        {
            url:'public/img/compuGod.jpeg',
            value: '1'
        },
        {
            url:'public/img/ModeloExactoPierna.jpeg',
            value: '2'
        },
        {
            url:'public/img/vasoFalso.jpeg',
            value: '3'
        }
    ]
};

const mesclacion = (arr) => {
    // Utiliza una función de comparación para ordenar aleatoriamente el array
    arr.sort(() => Math.random() - 0.5);
}
function mesclar() {
    mesclacion(listaIzquierda.lista1);
    mesclacion(listaIzquierda.lista2);

    // Asignar imágenes a los elementos
    divsIzquierda.forEach(function(botonI, i) {
        let materialI = listaIzquierda.lista1[i];
        botonI.style.backgroundImage = `url(${materialI.url})`;
        botonI.setAttribute('value', materialI.value);
    });

    divsDerecha.forEach(function(botonI, i) {
        let materialI = listaIzquierda.lista2[i];
        botonI.style.backgroundImage = `url(${materialI.url})`;
        botonI.setAttribute('value', materialI.value);
    });
}

// Función para mostrar las imágenes al cargar la página
function mostrarImagenes() {
    mesclacion(listaIzquierda.lista1);
    mesclacion(listaIzquierda.lista1);
    mesclacion(listaIzquierda.lista1);
    divsIzquierda.forEach(function(botonI, i) {
        let materialI = listaIzquierda.lista1[i];
        botonI.style.backgroundImage = `url(${materialI.url})`;
        botonI.setAttribute('value', materialI.value);
    });
    mesclacion(listaIzquierda.lista2);
    mesclacion(listaIzquierda.lista2);
    mesclacion(listaIzquierda.lista2);
    divsDerecha.forEach(function(botonI, i) {
        let materialI = listaIzquierda.lista2[i];
        botonI.style.backgroundImage = `url(${materialI.url})`;
        botonI.setAttribute('value', materialI.value);
    });
}

document.addEventListener("DOMContentLoaded", mostrarImagenes);
mesclador.addEventListener("click", mesclar);

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
                  // Oculta los elementos después de que la animación haya terminado
                imgIguales[j].style.display = "none";
                imgElements[j].style.display = "none";
                }, 300);
            } else {
                contadorIncorrecto++;
                clickIncorrecto.innerText = `Clics Incorrectos: ${contadorIncorrecto}`;
            }
    })
}