const oreo = document.querySelector('.oreo');
const oreoCont = document.querySelector('.oreo-cont');
const oreosDisplay = document.querySelector('.oreosDisplay');
const oreosPSDisplay = document.querySelector('.oreosPSDisplay');
const construccionesCont = document.querySelector('.construcciones-cont');

let construcciones = [
    {nombre: 'Cursor', cps: 1, precio: 20, cantidad: 0},
    {nombre: 'Abuela', cps: 2, precio: 100, cantidad: 0},
    {nombre: 'Granja', cps: 4, precio: 500, cantidad: 0},
    {nombre: 'Minas', cps: 8, precio: 2500, cantidad: 0},
    {nombre: 'Fabrica', cps: 16, precio: 10000, cantidad: 0},
    {nombre: 'Banco', cps: 32, precio: 50000, cantidad: 0},
    {nombre: 'Templo', cps: 64, precio: 250000, cantidad: 0}
]


let oreos = 1000;
let oreosPS = 1;

document.addEventListener('DOMContentLoaded', () => {
    iniciarOreosPS();
    actualizarDisplay();
    mostrarConstrucciones();
})
oreo.addEventListener('click', (e) => {
    oreos += Math.round((oreosPS * 0.135) * 100) / 100;
    actualizarDisplay();
    console.log(e);
    const p = document.createElement('p');
    p.classList.add('oreoText');
    p.textContent = '+' + Math.round((oreosPS * 0.135) * 100) / 100;
    oreoCont.append(p);
    p.style.left = e.clientX + 'px';
    p.style.top = e.clientY + 'px';
    setTimeout(() => {
        p.remove();
    },2000)
})

function iniciarOreosPS() {
    setInterval(() => {
        oreos += oreosPS;
        actualizarDisplay();
    },1000)
}
function actualizarDisplay() {
    oreosPSDisplay.textContent = `${oreosPS}/s`;
    oreosDisplay.textContent = `${Math.round((oreos) * 100) / 100} Oreos`;
}
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
                mostrarConstrucciones();
                actualizarDisplay();
            }
        }
    })
}