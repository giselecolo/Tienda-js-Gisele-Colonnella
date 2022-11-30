// carrito del nav.
let activarCarrito = () => {
    modalContainer.innerHTML ="";
    // <img src="${product.img}">
    carrito.forEach ((product) =>{
        let carritoContent = document.createElement ("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML += `
        
        <h3>${product.nombre}</h3>
        <p>$${product.precio}</p>
        <p>Cantidad: ${product.cantidad}</p>
        <span class="eliminar-producto"> 🗑 </span>
        `
        modalContainer.append(carritoContent)

        let eliminar = carritoContent.querySelector(".eliminar-producto");

        eliminar.addEventListener("click", ()=>{
            eliminarProducto (product.id)
            // SWAl para cuando el usuario elimina un producto.
            Swal.fire({
                title: `${product.nombre} eliminado.`,
                icon: "success",
                confirmButtonColor: "#ffc1d5",
                timer: 1500,
            })
        })
        
    });

    // TOTAL compra con método reduce
    let total =  carrito.reduce ((acc, el) => acc + el.precio, 0);

    let totalCompra = document.createElement("div")
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    modalContainer.append(totalCompra);
}


    botonFinalizarCompra.addEventListener("click", ()=>{
        const { value: email } =  Swal.fire({
            title: 'Ingresá tu mail para que te contactemos para finalizar tu compra',
            input: 'email',
            inputLabel: 'tu Mail',
            inputPlaceholder: 'tumail@ejemplo.com'
          })
          
          if (email) {
            Swal.fire(`ingresá un mail: ${email}`)
          }
    })


botonCarrito.addEventListener("click", ()=>{
    setTimeout (()=>{
        text.innerHTML =""
        loader.remove()
        activarCarrito()
    },1500)
    
}) 

// eliminar los productos que se cargan al carrito mediante los id de los productos y actualizacion del storage.
let eliminarProducto = (id)=>{
    let buscarId = carrito.find ((element) => element.id === id)

    carrito = carrito.filter ((idCarrito) =>{
        return idCarrito !== buscarId;
    });
    guardadoLocal();
    activarCarrito ();
}

