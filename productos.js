

const productos = [
    {
        id: 1,
        nombre:"Blusa Calada",
        precio: 7800,
        img: "./img/blusaCalada.jpg",
        cantidad: 1,
    },
    {
        id: 2,
        nombre:"Body Natural",
        precio: 5000,
        img: "./img/body.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre:"Blusa y Jean Mum",
        precio: 12000,
        img: "./img/combo1.jpg",
        cantidad: 1,
    },
    {
        id: 4,
        nombre:"Camisa y jean",
        precio: 15000,
        img: "./img/combo2.jpg",
        cantidad: 1,

    },
    {
        id: 5,
        nombre:"Blusa crochet",
        precio: 5300,
        img:"./img/crochet.jpg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre:"Blusa Verde",
        precio: 2900,
        img:"./img/remeraVerde.jpg",
        cantidad: 1,
    },
    {
        id: 7,
        nombre:"Sacón Azul",
        precio: 4900,
        img:"./img/sacoAzul.jpg",
        cantidad: 1,
    },
    {
        id: 8,
        nombre:"Vestido Brodery",
        precio: 6900,
        img:"./img/vestidoCorto.jpg",
        cantidad: 1,
    },
]

let carrito = JSON.parse(localStorage.getItem("stock")) || [];