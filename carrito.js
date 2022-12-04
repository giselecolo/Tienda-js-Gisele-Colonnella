// carrito del nav.
let  activarCarrito = () => {
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

        modalContainer.append(carritoContent);
            
        let eliminar = carritoContent.querySelector(".eliminar-producto");
        carritoContent.append(eliminar)

        eliminar.addEventListener("click", ()=>{
            eliminarProducto (producto.id)
            Swal.fire({
                title: `${producto.nombre} eliminado.`,
                icon: "success",
                confirmButtonColor: "#ffc1d5",
                timer: 900,
            })
           
        })
        // localStorage.setItem("carrito", JSON.stringify(stockDisponible));
        
    });
    
    // TOTAL compra con método reduce
    const total =  stockDisponible.reduce ((acc, el) => acc + el.precio, 0);

    let totalCompra = document.createElement("div")
    totalCompra.className = "text"
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    modalContainer.append(totalCompra);
    
    activarCarrito.length === 0 && console.log ("carrito vacio")    
}



botonCarrito.addEventListener("click", ()=>{
    modalContainer.innerHTML = "";
    setTimeout (()=>{
        text.innerHTML = "";
        loader.remove();
        // activarCarrito()
    },1500)
    
}) 


// eliminar los productos del modal.
const eliminarProducto = (id)=>{
    const foundId = stockDisponible.find ((element) => element.id === id)

    stockDisponible = stockDisponible.filter ((idCarrito) =>{
        return idCarrito !== foundId;
    });// retorno todos los elementos son el id del que se elimina    
    activarCarrito();
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
    






