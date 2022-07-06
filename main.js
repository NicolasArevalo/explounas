console.log('%c No manches, no mires la consola wtf. No hay nada que ver aquí.',
    'font-size: 20px; color: #FFF; background: red; padding: 10px;');
console.log('%c..', 'font-size: 300px; height: 150px; width: 100px; background: url(https://media.giphy.com/media/AAsj7jdrHjtp6/giphy.gif) no-repeat; background-size: cover;');

const $ = (selector) => document.querySelector(selector)
const A$ = (selector) => document.querySelectorAll(selector)

const btnabrir = $('#navbar-abrir')
const btncerrar = $('#navbar-cerrar')
const navbar = $('.navbar')
const main = $('main')

const footer = $('footer')
const ArrayIr = A$('.ir')
const ir = [...ArrayIr]

function abrir() {
    btncerrar.classList.remove('invisible')
    navbar.classList.remove('invisible')
    navbar.classList.add('fade')
    main.classList.add('noscroll')
    footer.classList.add('noscroll')

}
function cerrar() {
    btncerrar.classList.add('invisible')
    navbar.classList.add('invisible')
    main.classList.remove('noscroll')

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
const ArrayTargets = A$('.target')
const targets = [...ArrayTargets]

const config = {
    root: raiz,
    rootMargin: '0px',
    threshold: '.25',
}

let io = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let wasShown = entry.target.classList.contains('animate_animated')
            if (!wasShown) {
                entry.target.classList.remove('invisible2')
                entry.target.style.animation = 'fadeIn .6s ease-in-out'
                io.unobserve(entry.target)
            }
        }
    })

}, config)

io.observe(targets[1])
io.observe(targets[2])
io.observe(targets[3])


/* MODALSHIT */















