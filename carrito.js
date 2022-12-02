// carrito del nav.
const activarCarrito = () => {
    modalContainer.innerHTML = "";
    stockDisponible.forEach ((producto) =>{
        let carritoContent = document.createElement ("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML += `
        <h3>${producto.nombre}</h3>
        <p class="text">$${producto.precio}</p>
        <p class="text"> Cantidad: ${producto.cantidad}</p>
        <span class="eliminar-producto"> 🗑 </span>
        `;
        modalContainer.append(carritoContent)

        let eliminar = carritoContent.querySelector(".eliminar-producto");
       
        eliminar.addEventListener("click", ()=>{
            eliminarProducto (producto.id)
            Swal.fire({
                title: `${producto.nombre} eliminado.`,
                icon: "success",
                confirmButtonColor: "#ffc1d5",
                timer: 1000,
            })
            carritoContent.append(eliminar)
        })
        
    });
    
    // TOTAL compra con método reduce
    const total =  stockDisponible.reduce ((acc, el) => acc + el.precio, 0);

    let totalCompra = document.createElement("div")
    totalCompra.className = "text"
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    modalContainer.append(totalCompra);
    
}

botonCarrito.addEventListener("click", ()=>{
    setTimeout (()=>{
        text.innerHTML = "";
        loader.remove();
        activarCarrito(stockDisponible)
    },1500)
}) 

// eliminar los productos del modal.
const eliminarProducto = (id)=>{
    const foundId = stockDisponible.find ((element) => element.id === id)

    stockDisponible = stockDisponible.filter ((idCarrito) =>{
        return idCarrito !== foundId;
    });// retorno todos los elementos son el id del que se elimina    
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
    






