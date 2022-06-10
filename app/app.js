const oreo = document.querySelector('.oreo');
const oreoCont = document.querySelector('.oreo-cont');
const oreosDisplay = document.querySelector('.oreosDisplay');
const oreosPSDisplay = document.querySelector('.oreosPSDisplay');
const construccionesCont = document.querySelector('.construcciones-cont');
const mejorasCont = document.querySelector('.mejoras-cont');


// Construcciones
let construcciones = [
    { nombre: 'Cursor', cps: 1, precio: 20, cantidad: 9, img: 'cursor.png' },
    { nombre: 'Abuela', cps: 2, precio: 100, cantidad: 9, img: 'grandma.png' },
    { nombre: 'Granja', cps: 4, precio: 500, cantidad: 9, img: 'farm.png' },
    { nombre: 'Minas', cps: 8, precio: 2500, cantidad: 0, img: 'mine.png' },
    { nombre: 'Fabrica', cps: 16, precio: 10000, cantidad: 0, img: 'factory.png' },
    { nombre: 'Banco', cps: 32, precio: 50000, cantidad: 0, img: 'bank.png' },
    { nombre: 'Templo', cps: 64, precio: 250000, cantidad: 0, img: 'temple.png' },
    { nombre: 'Torre de mago', cps: 64, precio: 250000, cantidad: 0, img: 'wizard.png' },
    { nombre: 'Cohetes', cps: 64, precio: 250000, cantidad: 0, img: 'rocket.png' },
    { nombre: 'Laboratorios', cps: 64, precio: 250000, cantidad: 0, img: 'lab.png' },
    { nombre: 'Portales', cps: 64, precio: 250000, cantidad: 0, img: 'oreo.png' },
    { nombre: 'Máquinas del tiempo', cps: 64, precio: 250000, cantidad: 0, img: 'oreo.png' },
    { nombre: 'Condensadores de antimateria', cps: 64, precio: 250000, cantidad: 0, img: 'oreo.png' },
    { nombre: 'Primas', cps: 64, precio: 250000, cantidad: 0, img: 'oreo.png' },
    { nombre: 'Apostadoras', cps: 64, precio: 250000, cantidad: 0, img: 'oreo.png' },
    { nombre: 'Motores fractales', cps: 64, precio: 250000, cantidad: 0, img: 'oreo.png' }
]

// Mejoras
let mejoras = [
    { nombre: 'Cursor PRO', multiplica: 2, precio: 1000, construccion: 'Cursor', requiere: 10, objeto: construcciones[0] },

    { nombre: 'Abuelas PRO', multiplica: 2, precio: 5000, construccion: 'Abuela', requiere: 10, objeto: construcciones[1] },

    { nombre: 'Granja PRO', multiplica: 2, precio: 25000, construccion: 'Granja', requiere: 10, objeto: construcciones[2] },

    { nombre: 'Minas PRO', multiplica: 2, precio: 125000, construccion: 'Minas', requiere: 10, objeto: construcciones[3] },

    { nombre: 'Fabrica PRO', multiplica: 2, precio: 300000, construccion: 'Fabrica', requiere: 10, objeto: construcciones[4] },

    { nombre: 'Banco PRO', multiplica: 2, precio: 1000000, construccion: 'Banco', requiere: 10, objeto: construcciones[5] },

    { nombre: 'Templo PRO', multiplica: 2, precio: 5000000, construccion: 'Templo', requiere: 10, objeto: construcciones[6] },

    { nombre: 'Torre de mago PRO', multiplica: 2, precio: 5000000, construccion: 'Torre de mago', requiere: 10, objeto: construcciones[7] },

    { nombre: 'Cohetes PRO', multiplica: 2, precio: 5000000, construccion: 'Cohetes', requiere: 10, objeto: construcciones[8] },

    { nombre: 'Laboratorios PRO', multiplica: 2, precio: 5000000, construccion: 'Laboratorios', requiere: 10, objeto: construcciones[9] },

    { nombre: 'Portales PRO', multiplica: 2, precio: 5000000, construccion: 'Portales', requiere: 10, objeto: construcciones[10] },

    { nombre: 'Máquinas del tiempo PRO', multiplica: 2, precio: 5000000, construccion: 'Máquinas del tiempo', requiere: 10, objeto: construcciones[11] },

    { nombre: 'Condensadores de antimateria PRO', multiplica: 2, precio: 5000000, construccion: 'Condensadores de antimateria', requiere: 10, objeto: construcciones[12] },

    { nombre: 'Primas PRO', multiplica: 2, precio: 5000000, construccion: 'Primas', requiere: 10, objeto: construcciones[13] },

    { nombre: 'Apostadoras PRO', multiplica: 2, precio: 5000000, construccion: 'Apostadoras', requiere: 10, objeto: construcciones[14] },

    { nombre: 'Motores fractales PRO', multiplica: 2, precio: 5000000, construccion: 'Motores fractales', requiere: 10, objeto: construcciones[15] }
]

let mejorasForEach = []
let mejorasAplicadas = []
let mejorasFiltradas = []

// Oreos
let oreos = 0;
let oreosPS = 1;

// Evento de carga de DOM
document.addEventListener('DOMContentLoaded', () => {
    oreos = parseFloat(localStorage.getItem('oreos')) || parseFloat(0);
    oreosPS = parseFloat(localStorage.getItem('oreosPS')) || parseFloat(1);
    construcciones = JSON.parse(localStorage.getItem('construcciones')) || construcciones;
    mejorasForEach = JSON.parse(localStorage.getItem('mejorasForEach')) || mejorasForEach;
    // mejoras = JSON.parse(localStorage.getItem('mejoras')) || mejoras;
    iniciarOreosPS();
    actualizarDisplay();
    mostrarConstrucciones();
})

// Click a la galletita
oreo.addEventListener('click', oreoClick)

function oreoClick(e) {
    oreos += Math.round((oreosPS * 0.135) * 100) / 100;
    actualizarDisplay();
    const p = document.createElement('p');
    p.classList.add('oreoText');
    p.textContent = '+' + Math.round((oreosPS * 0.135) * 100) / 100;
    oreoCont.append(p);
    p.style.left = e.clientX + 'px';
    p.style.top = e.clientY + 'px';
    setTimeout(() => {
        p.remove();
    }, 2000)

}

// Aumentar por segundo
function iniciarOreosPS() {
    setInterval(() => {
        oreos += oreosPS;
        actualizarDisplay();
    }, 1000)
}

// Actualizar texto
function actualizarDisplay() {
    oreosPSDisplay.textContent = `${oreosPS}/s`;
    oreosDisplay.textContent = `${Math.round((oreos) * 100) / 100} Oreos`;
    localStorage.setItem('oreosPS', oreosPS)
    localStorage.setItem('oreos', oreos)
}

// Mostrar las construcciones en pantalla
function mostrarConstrucciones() {
    construcciones.forEach(construccion => {
        const div = document.createElement('div');
        const textCont = document.createElement('div');
        const imgText = document.createElement('div');
        const p = document.createElement('p');
        const quantity = document.createElement('p');
        const price = document.createElement('p');
        const btn = document.createElement('button');
        const img = document.createElement('img');

        div.classList.add('construccion');
        textCont.classList.add('textCont');
        imgText.classList.add('imgText');

        p.textContent = `${construccion.nombre}`;
        quantity.textContent = `Cantidad: ${construccion.cantidad}`
        img.src = `./img/${construccion.img}`
        btn.textContent = 'Comprar 1';
        price.textContent = `${construccion.precio} Oreos`

        textCont.append(p);
        textCont.append(quantity)

        imgText.append(img)
        imgText.append(textCont)

        btn.append(price)

        div.append(imgText)
        div.append(btn);

        construccionesCont.append(div);

        btn.onclick = () => {
            if (oreos >= construccion.precio) {
                oreosPS += construccion.cps;
                oreos -= construccion.precio;
                construccion.precio = Math.round(construccion.precio * 1.05);
                construccion.cantidad++;
                construccionesCont.textContent = '';
                localStorage.setItem('construcciones', JSON.stringify(construcciones));
                mostrarMejoras(construccion);
                mostrarConstrucciones();
                actualizarDisplay();
            }
        }
    })
}

// Mostrar las mejoras en pantalla
function mostrarMejoras(construccion) {
    if ((!mejorasForEach.some(elem => elem.construccion === construccion.nombre)) && construccion.nombre !== 'Chiche') {
        mejorasFiltradas = mejoras.filter(mejora => mejora.construccion === construccion.nombre && mejora.requiere === construccion.cantidad)
        if (mejorasFiltradas.length > 0) {
            mejorasForEach = [...mejorasForEach, ...mejorasFiltradas]
        }
        // localStorage.setItem('mejorasForEach', JSON.stringify(mejorasForEach));
    }

    mejorasCont.textContent = '';

    console.log(mejorasForEach);

    mejorasForEach.forEach(mejora => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const btnText = document.createElement('p');
        const btn = document.createElement('button');

        div.classList.add('mejora')

        p.textContent = `${mejora.nombre}`;
        btnText.textContent = `${mejora.precio} Oreos`
        btn.textContent = 'Comprar';

        btn.append(btnText);
        div.append(p);
        div.append(btn);
        mejorasCont.append(div);

        btn.onclick = () => {
            if (mejora.precio <= oreos) {
                oreos -= mejora.precio;
                actualizarDisplay();
                aplicarMejora(construccion, mejora);
            }
        }
    })
}

// Aplicar las mejoras
function aplicarMejora(construccion, mejora) {

    let i = construcciones.indexOf(mejora.objeto)
    console.log(i)
    console.log(mejora.objeto)
    console.log(construcciones)
    let mejorasFiltradas = construcciones.filter(construccionFilter => construccionFilter.nombre === mejora.construccion)
    console.log(mejorasFiltradas)
    console.log(mejora)

    // Actualizar valores
    let cantidadPS = construcciones[i].cps * construcciones[i].cantidad;
    let multiplicar = mejora.multiplica * cantidadPS;
    construcciones[i].cps = construcciones[i].cps * mejora.multiplica
    oreosPS -= cantidadPS;
    oreosPS += multiplicar;

    // Eliminar las mejoras del HTML
    mejorasForEach = mejorasForEach.filter(mejoras => mejoras.nombre !== mejora.nombre);

    console.log(mejorasForEach)

    // localStorage.setItem('mejorasForEach', JSON.stringify(mejorasForEach));

    // localStorage.setItem('mejoras', JSON.stringify(mejoras));

    // CHEQUEAR SI GUARDAR MEJORAS EN EL LOCAL STORAGE NO INTERFIERE AL NO ACTUALIZAR

    if (mejorasForEach.length === 0) {
        mostrarMejoras({nombre: 'Chiche'})
    } else {
        mostrarMejoras(construccion);
    }
}