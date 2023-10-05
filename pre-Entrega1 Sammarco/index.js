function generarTarjetas(datos, id_tarjetas,familia) {
    const contenedorTarjetas = document.getElementById(id_tarjetas);

    for (let i = 1; i <= datos.length; i++) {
        const tarjeta = datos[i - 1];

        const nuevaTarjeta = document.createElement('div');
        nuevaTarjeta.classList.add('tarjeta');
        nuevaTarjeta.id = id_tarjetas + `${i}`;

        nuevaTarjeta.innerHTML = `
            <img src="${tarjeta.imagen}" alt="${tarjeta.nombre}">
            <div class="datos_tarjeta1">
                <h3>${tarjeta.nombre}</h3>
                <p>Precio : $${tarjeta.precio}</p>
            </div>
            <div class="datos_tarjeta2">
                <label for="cant_${familia}${i}">cant:</label>
                <input type="number" id="cant_${familia}${i}" class="selector">
                <button type="button" class="btn" id="${familia}${i}">Agregar</button>
            </div>
        `;

        contenedorTarjetas.appendChild(nuevaTarjeta);

        // Agregar evento clic al boton "Agregar" de la tarjeta actual
        const botonAgregar = document.getElementById(`${familia}${i}`);
        botonAgregar.addEventListener('click',  () => {
            const cantidad = parseInt(document.getElementById(`cant_${familia}${i}`).value);
            const producto = { nombre: tarjeta.nombre, imagen: tarjeta.imagen, precio: tarjeta.precio, cantidad };

            // Agregar el producto al carrito
            agregarAlCarrito(producto);
            alert("se agrego con exito al carrito al carrito");
        });
    }
}
// Función para borrar la Local Storage
function borrarLocalStorage() {
    localStorage.clear(); 
    alert('El carrito ah sido borrado.'); 
    location.reload();
}
function sumarPreciosCarrito() {
    // se obtiene el carrito desde el localstorage y se convierte de JSON a obj
    const carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];

    // inicializacion del total,(se utiliza como sumador)
    let total = 0;

    
    carrito.forEach(producto => {
        total += parseInt(producto.precio) * producto.cantidad;
    });

    //  se devuelve el total
    return total;
}

// funcion para agregar productos al carrito
function agregarAlCarrito(producto) {
    // Verificar si el carrito ya existe en localStorage
    const carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];

    // Agregar el nuevo producto al carrito
    carrito.push(producto);

    // Guardar el carrito actualizado en localStorage como JSON
    localStorage.carrito = JSON.stringify(carrito);

    // Mensaje de confirmacion
    console.log('Producto agregado al carrito:', producto);
}

// Datos y llamada para zapatillas
const datos_zapatilla = [
    { nombre: "Vans", imagen: "./multimedia/zapatillaVans.webp", precio: "9500" },
    { nombre: "DC", imagen: "./multimedia/zapatillasDC.webp", precio: "10000" },
    { nombre: "Element", imagen: "./multimedia/zapatillasElement", precio: "10500" }
];

generarTarjetas(datos_zapatilla, 'contenedorZapatillas','zapatillas');

// Datos y llamada para Pantalones
const datos_pantalones = [
    { nombre: "Jeans", imagen: "./multimedia/pantalonesJeans", precio: "6000" },
    { nombre: "Joggis", imagen: "./multimedia/pantalonesJoggings", precio: "4000" },
    { nombre: "Bermudas", imagen: "./multimedia/bermuda", precio: "5760" }
];

generarTarjetas(datos_pantalones, 'contenedorPantalones','pantalones');

// Datos y llamada para buzos
const datos_Buzos = [
    { nombre: "Canguro", imagen: "./multimedia/canguro", precio: "9500" },
    { nombre: "Deportivo", imagen: "./multimedia/deportivo", precio: "10000" },
    { nombre: "Buzo Campera", imagen: "./multimedia/buzoCampera", precio: "10500" }
];

generarTarjetas(datos_Buzos, 'contenedorBuzos', 'buzos');


//  funcion para bbtener el carrito desde el almacenamiento local y convertirlo de JSON a objeto
function mostrarCarrito() {
    
    const carrito = localStorage.carrito ? JSON.parse(localStorage.carrito) : [];

    // Construir una cadena de texto con los elementos del carrito
    let carritoHTML = '<ul>';
    carrito.forEach(producto => {
        carritoHTML += `<li>${producto.nombre} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad}</li>`;
    });
    carritoHTML += '</ul>';

    // Mostrar la cadena de texto en el elemento con el id "carrito"
    const carritoElemento = document.getElementById('carritoContenedor');
    carritoElemento.innerHTML = carritoHTML;
}
    //REaccion del evento 'click' del boton
document.getElementById('botonCarrito').addEventListener('click', () => {
    // se obtiene el elemento con el id "carrito"
    const carritoElemento = document.getElementById('carritoContenedor');

        // aca se verifica si el carrito tiene la clase "activado"
    if (carritoElemento.classList.contains('activado')) {
        // Si tiene la clase 'activado', se le  cambia a "desactivado"

        carritoElemento.classList.remove('activado');
        carritoElemento.classList.add('desactivado');
    } else {
        // Si no tiene la clase "activado", se lo cambia a "activado"
        carritoElemento.classList.remove('desactivado');
        carritoElemento.classList.add('activado');
        mostrarCarrito()

        // funcion para obtener la suma de precios del carrito
        const totalCarrito = sumarPreciosCarrito();

        // Se muestra el total del carrito por consola
        console.log(`Total del carrito: $${totalCarrito}`);
    }
});





const botonBorrarLocalStorage = document.getElementById('botonBorrarLocalStorage');


botonBorrarLocalStorage.addEventListener('click', borrarLocalStorage);




