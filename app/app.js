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
    { nombre: 'Cursor PRO', multiplica: 2, precio: 1000, construccion: 'Cursor' },
    { nombre: 'Abuelas PRO', multiplica: 2, precio: 5000, construccion: 'Abuela' },
    { nombre: 'Granja PRO', multiplica: 2, precio: 25000, construccion: 'Granja' },
    { nombre: 'Minas PRO', multiplica: 2, precio: 125000, construccion: 'Minas' },
    { nombre: 'Fabrica PRO', multiplica: 2, precio: 300000, construccion: 'Fabrica' },
    { nombre: 'Banco PRO', multiplica: 2, precio: 1000000, construccion: 'Banco' },
    { nombre: 'Templo PRO', multiplica: 2, precio: 5000000, construccion: 'Templo' }
]

// Oreos
let oreos = 2000;
let oreosPS = 1;

// Evento de carga de DOM
document.addEventListener('DOMContentLoaded', () => {
    iniciarOreosPS();
    actualizarDisplay();
    mostrarConstrucciones();
})

// Click a la galletita
oreo.addEventListener('click', (e) => {
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
})

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
                console.log(mejoras)
                oreosPS += construccion.cps;
                oreos -= construccion.precio;
                construccion.precio = Math.round(construccion.precio * 1.05);
                construccion.cantidad++;
                construccionesCont.textContent = '';
                if (construccion.cantidad >= 10) {
                    mostrarMejoras(construccion);
                }
                mostrarConstrucciones();
                actualizarDisplay();
            }
        }
    })
}

// Mostrar las mejoras en pantalla
function mostrarMejoras(construccion) {
    mejorasFiltradas = mejoras.filter(mejora => mejora.construccion === construccion.nombre)
    mejorasFiltradas.forEach(mejora => {
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
                aplicarMejora(construccion);
            }
        }
    })
}

// Aplicar las mejoras
function aplicarMejora(construccion) {
    console.log(construccion)
    if (construccion.cantidad >= 10) {
        mejorasFiltradas = mejoras.filter(mejora => mejora.construccion === construccion.nombre)
        let cantidadPS = construccion.cps * construccion.cantidad;
        let multiplicar = mejorasFiltradas[0].multiplica * cantidadPS;
        construccion.cps = construccion.cps * mejorasFiltradas[0].multiplica
        oreosPS -= cantidadPS;
        oreosPS += multiplicar;
        mejoras = mejoras.filter(mejora => mejora.construccion !== construccion.nombre)
        mostrarMejoras(construccion);
    }
}