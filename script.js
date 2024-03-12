const CuadradosIzquierdos = document.getElementsByClassName("Cuadrado");
const CuadradosDerechos = document.getElementsByClassName("CuadradoD");
const divsIzquierda = document.querySelectorAll('.Cuadrado');
const divsDerecha = document.querySelectorAll('.CuadradoD');
let clickCorrecto = document.getElementsByClassName("contadorIgual")[0];
let clickIncorrecto = document.getElementsByClassName("contadorIncorrecto")[0];
let mesclador = document.getElementById("mesclador"); 
let contadorCorrecto = 0;
let contadorIncorrecto = 0;
let CheckList = [0, 0]

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
    arr.sort(() => Math.random() - 0.5);
}

function mesclar() {
    mesclacion(listaIzquierda.lista1);
    mesclacion(listaIzquierda.lista2);

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

for (let j = 0; j < CuadradosIzquierdos.length; j++) {
    CuadradosIzquierdos[j].addEventListener('click', () => {
        CheckList[0] = divsIzquierda[j].getAttribute('value');
        if (CheckList[0] != 0 && CheckList[1] != 0 ) {
            if (CheckList[1] === CheckList[0]) {
                contadorCorrecto++;
                clickCorrecto.innerText = `Clics Iguales: ${contadorCorrecto}`;
                CheckList = [0, 0]
            } else {
                contadorIncorrecto++;
                clickIncorrecto.innerText = `Clics Incorrectos: ${contadorIncorrecto}`;
                document.body.classList.add('animate__animated', 'animate__shakeX');
                setTimeout(() => {
                    document.body.classList.remove('animate__animated', 'animate__shakeX');
                }, 1000);
                CheckList = [0, 0]
            }
        }
    });
}

for (let i = 0; i < CuadradosDerechos.length; i++) {
    CuadradosDerechos[i].addEventListener('click', () => {
        CheckList[1] = divsDerecha[i].getAttribute('value');

        if (CheckList[0] != 0 && CheckList[1] != 0 ) {
            if (CheckList[1] === CheckList[0]) {
                contadorCorrecto++;
                clickCorrecto.innerText = `Clics Iguales: ${contadorCorrecto}`;
                CheckList = [0, 0]
            } else {
                contadorIncorrecto++;
                clickIncorrecto.innerText = `Clics Incorrectos: ${contadorIncorrecto}`;
                document.body.classList.add('animate__animated', 'animate__shakeX');
                setTimeout(() => {
                    document.body.classList.remove('animate__animated', 'animate__shakeX');
                }, 1000);
                CheckList = [0, 0]
            }
        }
    });
}

