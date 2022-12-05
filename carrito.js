// carrito del nav.
let  activarCarrito = () => {
    modalContainer.innerHTML = "";
    stockDisponible.forEach ((producto) =>{
        let carritoContent = document.createElement ("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML += `
        <h3>${producto.nombre}</h3>
        <p class="texto">$${producto.precio}</p>
        <p class="texto"> Cantidad: ${producto.cantidad}</p>
        
        <span id="botonEliminar" class="eliminar-producto"> ❌ </span>
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
        localStorage.setItem("carrito", JSON.stringify(stockDisponible));
        totalCompra(stockDisponible)
        
    });
    totalCompra(stockDisponible)
}
//function calcular total
function totalCompra(stockDisponible){
    let total = 0
    total = stockDisponible.reduce((acc, producto)=>acc + producto.precio,0)
    console.log(total)
    total == 0 ? precioTotal.innerHTML = `No hay productos en el carrito`: precioTotal.innerHTML = `EL total de su carrito es ${total}`;
    // modalContainer.append(totalCompra);
}


botonCarrito.addEventListener("click", ()=>{
    modalContainer.innerHTML = "";
    setTimeout (()=>{
        text.innerHTML = "";
        loader.remove();
        activarCarrito()
    },1500)
    
}) 


// eliminar productos comprados.
const eliminarProducto = (id)=>{
    const foundId = stockDisponible.find ((element) => element.id === id)

    stockDisponible = stockDisponible.filter ((idCarrito) =>{
        return idCarrito !== foundId;
    });// retorno todos los elementos son el id del que se elimina    
    activarCarrito();
}


// finalizar compra- tomado de la clase con mejor cierre que solo el mail.
botonFinalizarCompra.addEventListener("click",()=>{
    finalizarCompra()
})
function finalizarCompra(){
    Swal.fire({
        title: '¿Confirmás su compra?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero',
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire({
            title: 'Compra realizada',
            icon: 'success',
            confirmButtonColor: 'green',
            text: `Muchas gracias por su compra! nos pondremos en contacto para que reciba los productos. `,
            })
            //resetear o llevar a cero el array de carrito
            //Tenemos que researtearlo tanto al array como al localStorage
            stockDisponible =[]
            localStorage.removeItem("carrito")
        }else{
            Swal.fire({
                title: 'Compra no realizada',
                icon: 'info',
                text: `La compra no ha sido realizada! Atención sus productos siguen en el carrito`,
                confirmButtonColor: 'green',
                timer:3500
            })
        }
    })
}

// botonFinalizarCompra.addEventListener("click", ()=>{  
//         const { value: email } =  Swal.fire({
//             title: 'Ingresá tu mail para que te contactemos para finalizar tu compra',
//             input: 'email',
//             inputLabel: 'tu Mail',
//             inputPlaceholder: 'tumail@ejemplo.com'
//           })
//           if (email) {
//             Swal.fire(`ingresá un mail: ${email}`)
//           }
// })
    






// TOTAL compra con método reduce
// const total =  stockDisponible.reduce ((acc, el) => acc + el.precio, 0);

// let totalCompra = document.createElement("div")
// totalCompra.className = "text"
// totalCompra.innerHTML = `Total a pagar: $${total}`;
// modalContainer.append(totalCompra);
