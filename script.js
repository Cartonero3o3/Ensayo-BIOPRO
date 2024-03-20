const CuadradosIzquierdos = document.getElementsByClassName("Cuadrado");
const CuadradosDerechos = document.getElementsByClassName("CuadradoD");
const divsIzquierda = document.querySelectorAll('.Cuadrado');
const divsDerecha = document.querySelectorAll('.CuadradoD');
let clickCorrecto = document.getElementsByClassName("contadorIgual")[0];
let clickIncorrecto = document.getElementsByClassName("contadorIncorrecto")[0];
let mesclador = document.getElementById("mesclador"); 
let Aciertos = 0;
let contadorIncorrecto = 0;
let CheckList = [0, 0]
let agarrador; 
let agarradorD;

const lista = {
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
    mesclacion(lista.lista1);
    mesclacion(lista.lista2);

    divsIzquierda.forEach(function(botonI, i) {
        let materialI = lista.lista1[i];
        botonI.style.backgroundImage = `url(${materialI.url})`;
        botonI.setAttribute('value', materialI.value);
    });

    divsDerecha.forEach(function(botonI, i) {
        let materialI = lista.lista2[i];
        botonI.style.backgroundImage = `url(${materialI.url})`;
        botonI.setAttribute('value', materialI.value);
    });
}

function mostrarImagenes() {
    mesclacion(lista.lista1);
    mesclacion(lista.lista1);
    mesclacion(lista.lista1);
    divsIzquierda.forEach(function(botonI, i) {
        let materialI = lista.lista1[i];
        botonI.style.backgroundImage = `url(${materialI.url})`;
        botonI.setAttribute('value', materialI.value);
    });
    mesclacion(lista.lista2);
    mesclacion(lista.lista2);
    mesclacion(lista.lista2);
    divsDerecha.forEach(function(botonI, i) {
        let materialI = lista.lista2[i];
        botonI.style.backgroundImage = `url(${materialI.url})`;
        botonI.setAttribute('value', materialI.value);
    });
}

document.addEventListener("DOMContentLoaded", mostrarImagenes);
mesclador.addEventListener("click", mesclar);

for (let j = 0; j < CuadradosIzquierdos.length; j++) {
    CuadradosIzquierdos[j].addEventListener('click', () => {
        agarrador = j; // Almacenamos el índice j en agarradorD
        CheckList[0] = divsIzquierda[j].getAttribute('value');
        if (CheckList[0] != 0 && CheckList[1] != 0 ) {
            if (CheckList[1] === CheckList[0]) {
                Aciertos++;
                clickCorrecto.innerText = `Aciertos: ${Aciertos}`;
                eliminarBotonesConValor(CheckList[0]); 
                CheckList = [0, 0]
            } else {
                contadorIncorrecto++;
                clickIncorrecto.innerText = `Errores: ${contadorIncorrecto}`;
                divsIzquierda[agarrador].classList.add('animate__animated', 'animate__shakeX');    
                divsDerecha[agarradorD].classList.add('animate__animated', 'animate__shakeX');    
                setTimeout(() => {
                    divsIzquierda[agarrador].classList.remove('animate__animated', 'animate__shakeX');
                    divsDerecha[agarradorD].classList.remove('animate__animated', 'animate__shakeX');    
                }, 1000);
                CheckList = [0, 0]
            }
        }
    });
}

for (let i = 0; i < CuadradosDerechos.length; i++) {
    CuadradosDerechos[i].addEventListener('click', () => {
        agarradorD = i
        CheckList[1] = divsDerecha[i].getAttribute('value');
        if (CheckList[0] != 0 && CheckList[1] != 0 ) {
            if (CheckList[1] === CheckList[0]) {
                if (window.innerWidth > 520){
                    Aciertos++;
                    clickCorrecto.innerText = `Aciertos: ${Aciertos}`;
                    eliminarBotonesConValor(CheckList[0]); 
                    lista.lista1.splice(i, 1);
                    mesclador.style.display = "none"
                    reiniciar.style.display = "flex"
                    CheckList = [0, 0]
                }
            } else {
                contadorIncorrecto++;
                clickIncorrecto.innerText = `Errores: ${contadorIncorrecto}`;
                divsIzquierda[agarrador].classList.add('animate__animated', 'animate__shakeX');    
                divsDerecha[agarradorD].classList.add('animate__animated', 'animate__shakeX');    
                setTimeout(() => {
                    divsIzquierda[agarrador].classList.remove('animate__animated', 'animate__shakeX');
                    divsDerecha[agarradorD].classList.remove('animate__animated', 'animate__shakeX');    
                }, 1000);
                CheckList = [0, 0]
            }
        }
    });
}

function eliminarBotonesConValor(valor) {
    const botonesAEliminarIzquierda = document.querySelectorAll(`.Cuadrado[value="${valor}"]`);
    const botonesAEliminarDerecha = document.querySelectorAll(`.CuadradoD[value="${valor}"]`);

    botonesAEliminarIzquierda.forEach(boton => {
        boton.remove();
    });

    botonesAEliminarDerecha.forEach(boton => {
        boton.remove();
    });
}

function createAgrupamiento() {
    let agrupamiento = document.getElementById('agrupamiento');
    let contenedor = document.querySelector('.container');
    if (!agrupamiento) {
        if (window.innerWidth <= 520) {
            agrupamiento = document.createElement('div');
            agrupamiento.id = 'agrupamiento';
            agrupamiento.classList.add('column');
            document.querySelector('.container').insertBefore(agrupamiento, document.querySelector('.container').childNodes[4]);
            agrupamiento.appendChild(clickCorrecto);
            agrupamiento.appendChild(mesclador);
            agrupamiento.appendChild(clickIncorrecto);
        }
    } else {
        if (window.innerWidth > 520) {
            let contadorIgual = agrupamiento.querySelector('.contadorIgual');
            let contadorIncorrecto = agrupamiento.querySelector('.contadorIncorrecto');
            let mesclador = agrupamiento.querySelector('.mesclador');
            contenedor.insertBefore(contadorIgual, contenedor.childNodes[4]);
            contenedor.insertBefore(mesclador, contenedor.childNodes[4]);
            contenedor.insertBefore(contadorIncorrecto, contenedor.childNodes[4]);
            agrupamiento.remove();
        }
    }
}

window.onload = createAgrupamiento;
window.addEventListener('resize', createAgrupamiento);

document.getElementById('reiniciar').addEventListener('click', () => location.reload());
