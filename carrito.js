// carrito del nav.
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito")) || [];

function cargarProductosCarrito(array){
    modalBodyCarrito.innerHTML = ""
    array.forEach((productoComprado)=>{
        modalBodyCarrito.innerHTML += `
        <h3>${productoComprado.nombre}</h3>
                <p class="texto">$${productoComprado.precio}</p>
                <p class="texto"> Cantidad: ${productoComprado.cantidad}</p>
                <button class= "btn btn-danger" id="botonEliminar ${productoComprado.id}"><i class="fas fa-trash-alt"></i></button>
            </div>    
        </div>
`
    })

   //elimino del carrito (boton)
    let eliminar = document.getElementById ("botonEliminar");
    eliminar.addEventListener("click", ()=>{
        eliminarProducto (productoComprado.id)
        Swal.fire({
            title: `${productoComprado.nombre} eliminado.`,
            icon: "success",
            confirmButtonColor: "#ffc1d5",
            timer: 900,
        })
    })
    // carritoContent.append(eliminar)
    
    totalCompra(array)
}

//function calcular total
function totalCompra(array){
    let total = 0
    total = array.reduce((acc, producto)=>acc + producto.precio,0)
    console.log(total)
    total == 0 ? precioTotal.innerHTML = `No hay productos en el carrito`: precioTotal.innerHTML = `EL total de su carrito es ${total}`;
}

//evento btoton 
botonCarrito.addEventListener("click", ()=>{
    modalBodyCarrito.innerHTML = "";
    setTimeout (()=>{
        text.innerHTML = "";
        loader.remove();
        cargarProductosCarrito(productosEnCarrito)
    },1500)
    
}) 


// eliminar productos comprados.
const eliminarProducto = (id)=>{
    const foundId = productosEnCarrito.find ((element) => element.id === id)
    productosEnCarrito = productosEnCarrito.filter ((idCarrito) =>{
        return idCarrito !== foundId;
    });// retorno todos los elementos son el id del que se elimina    
    cargarProductosCarrito();
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
        confirmButtonText: 'Comprar',
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
            //reseteo
            productosEnCarrito =[]
            localStorage.removeItem("carrito")
        }else{
            Swal.fire({
                title: 'Compra no realizada',
                icon: 'info',
                text: `La compra no ha sido realizada!`,
                confirmButtonColor: 'green',
                timer:2500
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
//buscar otro más completo, porque no muestra opcion si está vacio.
    






// TOTAL compra con método reduce
// const total =  stockDisponible.reduce ((acc, el) => acc + el.precio, 0);

// let totalCompra = document.createElement("div")
// totalCompra.className = "text"
// totalCompra.innerHTML = `Total a pagar: $${total}`;
// modalContainer.append(totalCompra);
