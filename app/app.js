const oreo = document.querySelector('.oreo');
const oreoCont = document.querySelector('.oreo-cont');
const oreosDisplay = document.querySelector('.oreosDisplay');
const oreosPSDisplay = document.querySelector('.oreosPSDisplay');
const construccionesCont = document.querySelector('.construcciones-cont');
const mejorasCont = document.querySelector('.mejoras-cont');


// Construcciones
let construcciones = [
    { nombre: 'Cursor', cps: 1, precio: 20, cantidad: 0 },
    { nombre: 'Abuela', cps: 2, precio: 100, cantidad: 0 },
    { nombre: 'Granja', cps: 4, precio: 500, cantidad: 0 },
    { nombre: 'Minas', cps: 8, precio: 2500, cantidad: 0 },
    { nombre: 'Fabrica', cps: 16, precio: 10000, cantidad: 0 },
    { nombre: 'Banco', cps: 32, precio: 50000, cantidad: 0 },
    { nombre: 'Templo', cps: 64, precio: 250000, cantidad: 0 }
]

// Mejoras
let mejoras = [
    { nombre: 'Cursor PRO', multiplica: 2, precio: 1000, construccion: 'Cursor', requiere: 10, objeto: construcciones[0] },

    { nombre: 'Abuelas PRO', multiplica: 2, precio: 5000, construccion: 'Abuela', requiere: 10, objeto: construcciones[1] },

    { nombre: 'Granja PRO', multiplica: 2, precio: 25000, construccion: 'Granja', requiere: 10, objeto: construcciones[2] },

    { nombre: 'Minas PRO', multiplica: 2, precio: 125000, construccion: 'Minas', requiere: 10, objeto: construcciones[3] },

    { nombre: 'Fabrica PRO', multiplica: 2, precio: 300000, construccion: 'Fabrica', requiere: 10, objeto: construcciones[4] },

    { nombre: 'Banco PRO', multiplica: 2, precio: 1000000, construccion: 'Banco', requiere: 10, objeto: construcciones[5] },

    { nombre: 'Templo PRO', multiplica: 2, precio: 5000000, construccion: 'Templo', requiere: 10, objeto: construcciones[6] }
]

let mejorasForEach = []
let mejorasAplicadas = []
let mejorasFiltradas = []

// Oreos
let oreos = 0;
let oreosPS = 1;

// Evento de carga de DOM
document.addEventListener('DOMContentLoaded', () => {
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
}

// Mostrar las construcciones en pantalla
function mostrarConstrucciones() {
    construcciones.forEach(construccion => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const btn = document.createElement('button');

        div.classList.add('construccion')

        p.textContent = `Nombre: ${construccion.nombre} - Cantidad: ${construccion.cantidad} - Precio: ${construccion.precio} Oreos`;
        btn.textContent = 'Comprar';

        div.append(p);
        div.append(btn);
        construccionesCont.append(div);

        btn.onclick = () => {
            if (oreos >= construccion.precio) {
                oreosPS += construccion.cps;
                oreos -= construccion.precio;
                construccion.precio = Math.round(construccion.precio * 1.05);
                construccion.cantidad++;
                construccionesCont.textContent = '';
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
    }

    mejorasCont.textContent = '';

    mejorasForEach.forEach(mejora => {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const btn = document.createElement('button');

        div.classList.add('mejora')

        p.textContent = `Nombre: ${mejora.nombre} - Precio: ${mejora.precio} Oreos`;
        btn.textContent = 'Comprar';

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
    if (mejorasForEach.length === 0) {
        mostrarMejoras({nombre: 'Chiche'})
    } else {
        mostrarMejoras(construccion);
    }
}