// Selección de los bombillos y el botón
const topBulbs = document.querySelectorAll('.top');
const bottomBulbs = document.querySelectorAll('.bottom');
const toggleBtn = document.getElementById('btn-toggle');
// Variable para controlar el estado de los bombillos rojos y verdes
let isRedOn = false;
let isGreenOn = false;

// Función para encender la secuencia de los bombillos rojos
function turnOnRedBulbs() {
    let delay = 1000;
    topBulbs.forEach((bulb, index) => {
        setTimeout(() => {
            bulb.style.backgroundColor = 'red';
        }, delay * index);
    });
}

function changeLedColor(color) {
    document.querySelector('.bandera').style.backgroundColor = color;
}

// Función para encender los bombillos verdes
function turnOnGreenBulbs() {
    bottomBulbs.forEach(bulb => {
        bulb.style.backgroundColor = 'green';
    });
}
function changeBanderaColor(color) {
    document.querySelector('.bandera').style.backgroundColor = color;
}

// Event listener para el botón
toggleBtn.addEventListener('click', () => {
// Si los bombillos rojos están apagados, enciende la secuencia de los bombillos rojos
    if (!isRedOn) {
        turnOnRedBulbs();
        isRedOn = true;
    } else {
// Si los bombillos rojos están encendidos, enciende los bombillos verdes y apaga los bombillos rojos
        turnOnGreenBulbs();
        isRedOn = false;
        topBulbs.forEach(bulb => {
            bulb.style.backgroundColor = 'gray';
        });
    }
});
