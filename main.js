// capturas del DOM
let shopContent = document.getElementById ("shopContent");
let botonCarrito = document.getElementById("botonCarrito");
let modalBodyCarrito = document.getElementById ("modalBodyCarrito");
let precioTotal = document.getElementById("precioTotal")
let text = document.getElementById("text");
let loader = document.getElementById("loader");
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra");

// clase constructora
class Productos {
    constructor(id, nombre, talle, precio, imagen, cantidad){
        this.id = id,
        this.nombre = nombre,
        this.talle = talle,
        this.precio = precio,
        this.imagen = imagen,
        this.cantidad = cantidad
    }
    
}

let stockDisponible =  [];

// petición asincronica con .json que creé. Lo hice siguiendo la clase.
const setearProductos = async ()=>{
    const response =  await fetch("productos.json")
    const data =  await response.json()
    console.log (data)
    for (let producto of data){
        let productosNuevos = new Productos(producto.id, producto.nombre, producto.talle, producto.precio, producto.imagen, producto.cantidad);
        stockDisponible.push (productosNuevos)
        
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `
            <img src="${producto.img}">
            <h3 class="titulo">${producto.nombre}</h3>
            <p class="texto"> ${producto.talle}</p>
            <p class="texto"> $${producto.precio}</p>
        `;
        shopContent.append(content);
        
        let comprar = document.createElement ("button")
        comprar.innerText = "¡lo quiero!";
        comprar.className = "btn";
    
        content.append(comprar);
       
        // Con el some para que me detecte si ya está cargado o no porque le puse cantidad a c/objeto.
        comprar.addEventListener("click", () =>{
            let repeat = productosEnCarrito.some((productoRepetido) => productoRepetido.id === producto.id);
            if(repeat){
                productosEnCarrito.map ((prod)=>{
                    if (prod.id === producto.id){
                        prod.cantidad++;
                    }
                }); 
            }else{
                productosEnCarrito.push({
                    id: producto.id,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    cantidad: producto.cantidad,
                });
               
            }
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
            // toastify para cuando se agrega un prod.
            Toastify({
                text: `${producto.nombre} fue agregado al carrito`,
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "bottom", 
                position: "right", 
                stopOnFocus: true, 
                style: {
                  background: "#ffc1d5",
                  fontfamily: 'Arima', 
                    fontsize: "18 px",
                },
                onClick: function(){} 
              }).showToast();
           
            
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
        })
            
    }
}

// setearProductos(stockDisponible)

//CONDICIONAL PRIMER INGRESO

if (localStorage.getItem("stockDisponible")) {
    stockDisponible = JSON.parse(localStorage.getItem("stockDisponible"))
} else {
    setearProductos(stockDisponible)
}




