// capturas del DOM
let shopContent = document.getElementById ("shopContent");
let botonCarrito = document.getElementById("botonCarrito")
let modalContainer = document.getElementById ("modalContainer");
let buscador = document.getElementById("buscador")
let text = document.getElementById("text")
let loader = document.getElementById("loader")
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3 class="titulo">${product.nombre}</h3>
        <p class="precio"> $${product.precio}</p>
    `;
    shopContent.append(content);

    let comprar =document.createElement ("button")
    comprar.innerText = "¡lo quiero!";
    comprar.className = "btn";

    content.append(comprar);

    // Con el some para que me detecte si ya está cargado o no porque le puse cantidad a c/objeto.
    comprar.addEventListener("click", () =>{
        let repeat = carrito.some((productoRepetido) => productoRepetido.id === product.id);
        if(repeat === true){
            carrito.map ((prod)=>{
                if (prod.id === product.id){
                    prod.cantidad++;
                }
            }); 
        }else{
            carrito.push({
                id: product.id,
                nombre: product.nombre,
                precio: product.precio,
                img: product.img,
                cantidad: product.cantidad
            });
            guardadoLocal()
        }
        // toastify para cuando se agrega un prod.
        Toastify({
            text: `${product.nombre} fue agregado al carrito`,
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
        
        
    })
});
let guardadoLocal =() => {
    localStorage.setItem("stock", JSON.stringify(carrito));
}




