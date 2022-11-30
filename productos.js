

const productos = [
    {
        id: 1,
        nombre:"anillado",
        precio: 1800,
        img: "./img/anillado.jpg",
        cantidad: 1,
    },
    {
        id: 2,
        nombre:"diaria",
        precio: 5000,
        img: "./img/diaria.jpg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre:"diario",
        precio: 3100,
        img: "./img/diario.jpg",
        cantidad: 1,
    },
    {
        id: 4,
        nombre:"rusticos",
        precio: 1500,
        img: "./img/rusticos.jpg",
        cantidad: 1,

    },
    {
        id: 5,
        nombre:"semanal",
        precio: 3300,
        img:"./img/sav.jpg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre:"tapa blanda",
        precio: 900,
        img:"./img/tapablanda.jpg",
        cantidad: 1,
    },
]

let carrito = JSON.parse(localStorage.getItem("stock")) || [];