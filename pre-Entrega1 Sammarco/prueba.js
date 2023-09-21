
function Producto(modelo, precio){
    this.modelo = modelo;
    this.precio = precio;
}

let zapatilla1 = new Producto("DC shoes", 10000);
let zapatilla2 = new Producto("Vans", 9500);
let zapatilla3 = new Producto("Element", 10500);

let pant1 = new Producto("Jeans", 6000);
let pant2 = new Producto("Joggis", 4000);
let pant3 = new Producto("Bermudas", 5760);

let diver1 = new Producto("Canguro", 15000);
let diver2 = new Producto("Deportivos", 11000);
let diver3 = new Producto("Buzo Campera", 17230);



const shoes = [zapatilla1, zapatilla2, zapatilla3];

console.table(shoes);

const divers = [diver1, diver2, diver3];

console.table(divers);

const pants = [pant1, pant2, pant3];

console.table(pants);

let carrito = [];

function suma(acumulador, actual) {
    return acumulador + actual;
}

function SeleccionZ (opcion){
    if (opcion == 1){
      return carrito.push(zapatilla1.precio);
    } else if (opcion == 2){
        return carrito.push(zapatilla2.precio); 
    } else if (opcion == 3){
        return carrito.push(zapatilla3.precio); 
    } 
}

function SeleccionPants (opcion){
    if (opcion == 1){
        return carrito.push(pant1.precio);
      } else if (opcion == 2){
          return carrito.push(pant2.precio); 
      } else if (opcion == 3){
          return carrito.push(pant3.precio); 
      } 

}
function SeleccionBuzos (opcion){
    if (opcion == 1){
        return carrito.push(diver1.precio);
      } else if (opcion == 2){
          return carrito.push(diver2.precio); 
      } else if (opcion == 3){
          return carrito.push(diver3.precio); 
      } 
}


function suma(acumulador, actual) {
    return acumulador + actual;
}

const totalCarrito = carrito.reduce(suma, 0);

console.log("llegamos bien");
console.log(totalCarrito);


