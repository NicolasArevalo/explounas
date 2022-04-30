/* console.log('%c____', 'font-size: 100px; background: url(https://media.giphy.com/media/3o7bu0zqjQXqQqQq2U/giphy.gif) no-repeat; background-size: cover;'); */
console.log('%c No manches, no mires la consola wtf. No hay nada que ver aquí.',
 'font-size: 20px; color: #FFF; background: red; padding: 10px;');
 console.log('Literalmente nada xD')

const $ = (selector) => document.querySelector(selector)
const A$ = (selector) => document.querySelectorAll(selector)

const btnabrir = $('#navbar-abrir')
const btncerrar = $('#navbar-cerrar')
const navbar = $('.navbar')
const main = $('main')
const subir = $('.subir')
const footer = $('footer')
const ArrayIr = A$('.ir')
const ir = [...ArrayIr]

function abrir() {
    btncerrar.classList.remove('invisible')
    navbar.classList.remove('invisible')
    main.classList.add('noscroll')
    subir.classList.add('noscroll')
    footer.classList.add('noscroll')

}
function cerrar() {
    btncerrar.classList.add('invisible')
    navbar.classList.add('invisible')
    main.classList.remove('noscroll')
    subir.classList.remove('noscroll')
    footer.classList.remove('noscroll')
}
btnabrir.addEventListener('click', () => {
    abrir()
})

btncerrar.addEventListener('click', () => {
    cerrar()
})

ir.forEach(item => {
    item.addEventListener('click', () => {
        cerrar()
    })
})

/* IntersectionShit */


const raiz = $('#raiz')
/* const ArrayTargets = A$('.target')
const targets = [...ArrayTargets] */
const target = $('.target')

const config = {
    root: raiz,
    rootMargin: '0px',
    threshold: '0',
  }


let io = new IntersectionObserver(function(entries){
    /* entries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        }
        else{
            entry.target.classList.add('visible')
        }
    }) */
    console.log('entries: ', entries)
}, config)

io.observe(target)






















