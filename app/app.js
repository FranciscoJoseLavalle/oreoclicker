const oreo = document.querySelector('.oreo');
const oreoCont = document.querySelector('.oreo-cont');
const oreosDisplay = document.querySelector('.oreosDisplay');
const oreosPSDisplay = document.querySelector('.oreosPSDisplay');
const construccionesCont = document.querySelector('.construcciones-cont');
const mejorasCont = document.querySelector('.mejoras-cont');
const menu = document.querySelector('.menu');
const hide = document.querySelector('.hide');
const reset = document.querySelector('.reset');
const body = document.querySelector('body');
const info = document.querySelector('.info');
const infoHide = document.querySelector('.infoHide');


// Construcciones
let construcciones = [
    { nombre: 'Cursor', cps: 1, precio: 20, cantidad: 0, img: 'cursor.png' },
    { nombre: 'Abuela', cps: 2, precio: 100, cantidad: 0, img: 'grandma.png' },
    { nombre: 'Granja', cps: 4, precio: 500, cantidad: 0, img: 'farm.png' },
    { nombre: 'Minas', cps: 8, precio: 2500, cantidad: 0, img: 'mine.png' },
    { nombre: 'Fabrica', cps: 16, precio: 10000, cantidad: 0, img: 'factory.png' },
    { nombre: 'Banco', cps: 32, precio: 50000, cantidad: 0, img: 'bank.png' },
    { nombre: 'Templo', cps: 64, precio: 250000, cantidad: 0, img: 'temple.png' },
    { nombre: 'Torre de mago', cps: 150, precio: 2500000, cantidad: 0, img: 'wizard.png' },
    { nombre: 'Cohetes', cps: 200, precio: 10000000, cantidad: 0, img: 'rocket.png' },
    { nombre: 'Laboratorios', cps: 350, precio: 100000000, cantidad: 0, img: 'lab.png' },
    { nombre: 'Portales', cps: 700, precio: 50000000, cantidad: 0, img: 'portal.png' },
    { nombre: 'Máquinas del tiempo', cps: 900, precio: 1000000000, cantidad: 0, img: 'time.png' },
    { nombre: 'Condensadores de antimateria', cps: 2000, precio: 5000000000, cantidad: 0, img: 'condenser.png' },
    { nombre: 'Primas', cps: 3600, precio: 500000000000, cantidad: 0, img: 'prism.png' },
    { nombre: 'Apostadoras', cps: 8000, precio: 1000000000000, cantidad: 0, img: 'casino.png' },
    { nombre: 'Motores fractales', cps: 17000, precio: 50000000000000, cantidad: 0, img: 'fractal.png' }
]

// Mejoras
let mejoras = [
    { nombre: 'Cursor PRO', multiplica: 2, precio: 1000, construccion: 'Cursor', requiere: 10, objeto: construcciones[0], img: 'cursor.png' },
    { nombre: 'Cursor Super', multiplica: 2, precio: 5000, construccion: 'Cursor', requiere: 25, objeto: construcciones[0], img: 'cursor.png' },
    { nombre: 'Cursor Mega', multiplica: 2, precio: 10000, construccion: 'Cursor', requiere: 50, objeto: construcciones[0], img: 'cursor.png' },
    { nombre: 'Cursor Galax', multiplica: 2, precio: 5000000, construccion: 'Cursor', requiere: 100, objeto: construcciones[0], img: 'cursor.png' },

    { nombre: 'Abuelas PRO', multiplica: 2, precio: 5000, construccion: 'Abuela', requiere: 10, objeto: construcciones[1], img: 'grandma.png' },
    { nombre: 'Abuelas Super', multiplica: 2, precio: 25000, construccion: 'Abuela', requiere: 25, objeto: construcciones[1], img: 'grandma.png' },
    { nombre: 'Abuelas Mega', multiplica: 2, precio: 450000, construccion: 'Abuela', requiere: 50, objeto: construcciones[1], img: 'grandma.png' },
    { nombre: 'Abuelas Mega', multiplica: 2, precio: 5000000, construccion: 'Abuela', requiere: 100, objeto: construcciones[1], img: 'grandma.png' },

    { nombre: 'Granja PRO', multiplica: 2, precio: 25000, construccion: 'Granja', requiere: 10, objeto: construcciones[2], img: 'farm.png' },
    { nombre: 'Granja Super', multiplica: 2, precio: 125000, construccion: 'Granja', requiere: 25, objeto: construcciones[2], img: 'farm.png' },
    { nombre: 'Granja Mega', multiplica: 2, precio: 1000000, construccion: 'Granja', requiere: 50, objeto: construcciones[2], img: 'farm.png' },
    { nombre: 'Granja Mega', multiplica: 2, precio: 50000000, construccion: 'Granja', requiere: 100, objeto: construcciones[2], img: 'farm.png' },

    { nombre: 'Minas PRO', multiplica: 2, precio: 125000, construccion: 'Minas', requiere: 10, objeto: construcciones[3], img: 'mine.png' },
    { nombre: 'Minas Super', multiplica: 2, precio: 300000, construccion: 'Minas', requiere: 25, objeto: construcciones[3], img: 'mine.png' },
    { nombre: 'Minas Mega', multiplica: 2, precio: 5000000, construccion: 'Minas', requiere: 50, objeto: construcciones[3], img: 'mine.png' },
    { nombre: 'Minas Mega', multiplica: 2, precio: 100000000, construccion: 'Minas', requiere: 100, objeto: construcciones[3], img: 'mine.png' },

    { nombre: 'Fabrica PRO', multiplica: 2, precio: 300000, construccion: 'Fabrica', requiere: 10, objeto: construcciones[4], img: 'factory.png' },
    { nombre: 'Fabrica Super', multiplica: 2, precio: 1000000, construccion: 'Fabrica', requiere: 25, objeto: construcciones[4], img: 'factory.png' },
    { nombre: 'Fabrica Mega', multiplica: 2, precio: 10000000, construccion: 'Fabrica', requiere: 50, objeto: construcciones[4], img: 'factory.png' },
    { nombre: 'Fabrica Mega', multiplica: 2, precio: 500000000, construccion: 'Fabrica', requiere: 100, objeto: construcciones[4], img: 'factory.png' },

    { nombre: 'Banco PRO', multiplica: 2, precio: 1000000, construccion: 'Banco', requiere: 10, objeto: construcciones[5], img: 'bank.png' },
    { nombre: 'Banco Super', multiplica: 2, precio: 5000000, construccion: 'Banco', requiere: 25, objeto: construcciones[5], img: 'bank.png' },
    { nombre: 'Banco Mega', multiplica: 2, precio: 5000000, construccion: 'Banco', requiere: 50, objeto: construcciones[5], img: 'bank.png' },

    { nombre: 'Templo PRO', multiplica: 2, precio: 5000000, construccion: 'Templo', requiere: 10, objeto: construcciones[6], img: 'temple.png' },
    { nombre: 'Templo Super', multiplica: 2, precio: 10000000, construccion: 'Templo', requiere: 25, objeto: construcciones[6], img: 'temple.png' },

    { nombre: 'Torre de mago PRO', multiplica: 2, precio: 1000000, construccion: 'Torre de mago', requiere: 10, objeto: construcciones[7], cantidad: 0, img: 'wizard.png' },
    { nombre: 'Torre de mago Super', multiplica: 2, precio: 50000000, construccion: 'Torre de mago', requiere: 25, objeto: construcciones[7], cantidad: 0, img: 'wizard.png' },

    { nombre: 'Cohetes PRO', multiplica: 2, precio: 50000000, construccion: 'Cohetes', requiere: 10, objeto: construcciones[8], img: 'rocket.png' },
    { nombre: 'Cohetes Super', multiplica: 2, precio: 100000000, construccion: 'Cohetes', requiere: 25, objeto: construcciones[8], img: 'rocket.png' },

    { nombre: 'Laboratorios PRO', multiplica: 2, precio: 100000000, construccion: 'Laboratorios', requiere: 10, objeto: construcciones[9], img: 'lab.png' },
    { nombre: 'Laboratorios Super', multiplica: 2, precio: 500000000, construccion: 'Laboratorios', requiere: 25, objeto: construcciones[9], img: 'lab.png' },

    { nombre: 'Portales PRO', multiplica: 2, precio: 500000000, construccion: 'Portales', requiere: 10, objeto: construcciones[10], img: 'portal.png' },
    { nombre: 'Portales Super', multiplica: 2, precio: 1000000000, construccion: 'Portales', requiere: 25, objeto: construcciones[10], img: 'portal.png' },

    { nombre: 'Máquinas del tiempo PRO', multiplica: 2, precio: 1000000000, construccion: 'Máquinas del tiempo', requiere: 10, objeto: construcciones[11], img: 'time.png' },
    { nombre: 'Máquinas del tiempo Super', multiplica: 2, precio: 5000000000, construccion: 'Máquinas del tiempo', requiere: 25, objeto: construcciones[11], img: 'time.png' },

    { nombre: 'Condensadores de antimateria PRO', multiplica: 2, precio: 5000000000, construccion: 'Condensadores de antimateria', requiere: 10, objeto: construcciones[12], img: 'condenser.png' },
    { nombre: 'Condensadores de antimateria Super', multiplica: 2, precio: 10000000000, construccion: 'Condensadores de antimateria', requiere: 25, objeto: construcciones[12], img: 'condenser.png' },

    { nombre: 'Primas PRO', multiplica: 2, precio: 10000000000, construccion: 'Primas', requiere: 10, objeto: construcciones[13], img: 'prism.png' },
    { nombre: 'Primas Super', multiplica: 2, precio: 50000000000, construccion: 'Primas', requiere: 25, objeto: construcciones[13], img: 'prism.png' },

    { nombre: 'Apostadoras PRO', multiplica: 2, precio: 100000000000, construccion: 'Apostadoras', requiere: 10, objeto: construcciones[14], img: 'casino.png' },
    { nombre: 'Apostadoras Super', multiplica: 2, precio: 500000000000, construccion: 'Apostadoras', requiere: 25, objeto: construcciones[14], img: 'casino.png' },

    { nombre: 'Motores fractales PRO', multiplica: 2, precio: 1000000000000, construccion: 'Motores fractales', requiere: 10, objeto: construcciones[15], img: 'fractal.png' },
    { nombre: 'Motores fractales Super', multiplica: 2, precio: 5000000000000, construccion: 'Motores fractales', requiere: 25, objeto: construcciones[15], img: 'fractal.png' }
]

let mejorasForEach = []
let mejorasAplicadas = []
let mejorasFiltradas = []

// Oreos
let oreos = 20000000;
let oreosPS = 1;

// Desplegar menú
menu.addEventListener('click', () => {
    showMenu(hide, infoHide)
})
info.addEventListener('click', () => {
    showMenu(infoHide, hide)
})
function showMenu(object, oppositeObject) {
    object.classList.toggle('navMenu');
    if (object.classList.contains('navMenu')) {
        body.classList.add('scrollLock')
        object.classList.remove('use');
        object.classList.remove('hideMenu');
        object.classList.add('showMenu');
        if (oppositeObject.classList.contains('navMenu')) {
            oppositeObject.classList.remove('showMenu');
            oppositeObject.classList.remove('navMenu');
            oppositeObject.classList.add('hideMenu');
            setTimeout(() => {
                oppositeObject.classList.add('use');
                oppositeObject.classList.remove('hideMenu');
            },1000)
        }
    } else {
        object.classList.remove('showMenu');
        object.classList.add('hideMenu');
        setTimeout(() => {
            object.classList.add('use');
            body.classList.remove('scrollLock')
            object.classList.remove('hideMenu');
        },1000)
    }
}

// Evento de carga de DOM
document.addEventListener('DOMContentLoaded', () => {
    oreos = parseFloat(localStorage.getItem('oreos')) || parseFloat(0);
    oreosPS = parseFloat(localStorage.getItem('oreosPS')) || parseFloat(1);
    mejorasForEach = JSON.parse(localStorage.getItem('mejorasForEach')) || mejorasForEach;
    construcciones = JSON.parse(localStorage.getItem('construcciones')) || construcciones;
    construcciones.forEach(construccion => mostrarMejoras(construccion))
    iniciarOreosPS();
    actualizarDisplay();
    mostrarConstrucciones();
    console.log(construcciones)
})

// Vaciar localStorage
reset.addEventListener('click', () => {
    localStorage.clear();
    oreos = 0;
    oreosPS = 1;
    location.reload();
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
        const btnInfo = document.createElement('button');
        const img = document.createElement('img');
        const btnCont = document.createElement('div');

        div.classList.add('construccion');
        textCont.classList.add('textCont');
        imgText.classList.add('imgText');
        btnCont.classList.add('btnCont');

        p.textContent = `${construccion.nombre}`;
        quantity.textContent = `Cantidad: ${construccion.cantidad}`
        img.src = `./img/${construccion.img}`;
        btnInfo.textContent = 'Info';
        btn.textContent = 'Comprar 1';
        price.textContent = `${construccion.precio} Oreos`

        textCont.append(p);
        textCont.append(quantity);

        imgText.append(img);
        imgText.append(textCont);


        btn.append(price);

        btnCont.append(btnInfo);
        btnCont.append(btn);

        div.append(imgText);
        div.append(btnCont);

        construccionesCont.append(div);

        btn.onclick = () => {
            if (oreos >= construccion.precio) {
                oreosPS += construccion.cps;
                oreos -= construccion.precio;
                construccion.precio = Math.round(construccion.precio * 1.05);
                construccion.cantidad++;
                construccionesCont.textContent = '';
                localStorage.setItem('construcciones', JSON.stringify(construcciones));
                localStorage.setItem('mejoras', JSON.stringify(mejoras));
                mostrarMejoras(construccion);
                mostrarConstrucciones();
                actualizarDisplay();
            }
        }
        btnInfo.onclick = () => {
            const infoCont = document.createElement('div');
            const infoText = document.createElement('p');

            infoText.textContent = `Oreos por segundo: ${construccion.cps} - Oreos en total: ${construccion.cps * construccion.cantidad}`

            div.append(infoText);
        }
    })
}

// Mostrar las mejoras en pantalla
function mostrarMejoras(construccion) {
    if ((!mejorasForEach.some(elem => elem.construccion === construccion.nombre && elem.requiere === construccion.cantidad)) && construccion.nombre !== 'Chiche') {
        mejorasFiltradas = mejoras.filter(mejora => mejora.construccion === construccion.nombre && mejora.requiere === construccion.cantidad)
        console.log(mejorasFiltradas)
        if (mejorasFiltradas.length > 0) {
            console.log(mejorasForEach);
            mejorasForEach = [...mejorasForEach, ...mejorasFiltradas]
        }
        localStorage.setItem('mejorasForEach', JSON.stringify(mejorasForEach));
    }

    localStorage.setItem('mejoras', JSON.stringify(mejoras));

    mejorasCont.textContent = '';

    console.log(mejorasForEach);

    mejorasForEach.forEach(mejora => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const btnText = document.createElement('p');
        const btn = document.createElement('button');
        const img = document.createElement('img');

        div.classList.add('mejora')

        p.textContent = `${mejora.nombre} x${mejora.multiplica}`;
        btnText.textContent = `${mejora.precio} Oreos`
        btn.textContent = 'Comprar';
        img.src = `./img/${mejora.img}`

        btn.append(btnText);
        div.append(img);
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
    let mejorasFiltradas = construcciones.filter(construccionFilter => construccionFilter.nombre === mejora.construccion)
    let i = construcciones.indexOf(mejorasFiltradas[0])
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

    localStorage.setItem('mejorasForEach', JSON.stringify(mejorasForEach));

    if (mejorasForEach.length === 0) {
        mostrarMejoras({nombre: 'Chiche'})
    } else {
        mostrarMejoras(construccion);
    }
}