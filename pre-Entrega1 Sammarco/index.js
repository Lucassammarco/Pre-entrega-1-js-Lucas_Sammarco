let suma = 0;

alert ("Bienvenid@ a la tienda improvisada !");
const nombre = prompt("como te llamas ? ");

alert ("Hola " + nombre + " en esta tienda encontraras una variedad de productos de tu interes");

alert ("como esta tienda online aun se esta creando, te vamos a indicar los prodructos de forma numerica para que vos eligas el tipo de producto que quieras comprar");

function SeleccionZ (opcion){
    if (opcion == 1){
        suma = suma + 10000;
    } else if (opcion == 2){
        suma = suma + 9500; 
    } else if (opcion == 3){
        suma = suma + 10500; 
    }

    return suma;
}

function SeleccionPants (opcion){
    if (opcion == 1){
        suma = suma + 6000;
    } else if (opcion == 2){
        suma = suma + 4000; 
    } else if (opcion == 3){
        suma = suma + 5760; 
    }

    return suma;
}

function SeleccionBuzos (opcion){
    if (opcion == 1){
        suma = suma + 15000;
    } else if (opcion == 2){
        suma = suma +11000; 
    } else if (opcion == 3){
        suma = suma + 17230; 
    }

    return suma;
}

let option = parseInt(prompt("opcion 1 = zapatillas, Opcion 2 = pantalones, Opcion 3 = Buzos, Precione '0' si no quiero comprar ningun producto.."));

console.log(option);

while(option != 0){
    switch (option){

        case 1 : 
            alert("Elgiste la opcion de zapatillas!, a continuacion le mostraremos los modelos y los precios de par de zapatillas, presione aceptar..");
            do{
                let modelo = parseInt(prompt("Opcion 1 = Modelo 'DC', Precio: $10.000 Opcion 2 = Modelo 'Vans', Precio: $9.500  Opcion 3 = Modelo: 'Element', Precio: $10.500"));
                

                SeleccionZ (modelo);

                console.log(suma);

                alert("llevas gastando " + suma);

                var bucle = parseInt(prompt("desea continuar comprando? 1 = 'SI',  2 = Volver a las opciones anteriores"));

                console.log(bucle);

            }while(bucle == 1);
            
            break;
        
        case 2 : 
            alert("Elgiste la opcion de Pantalones!, a continuacion le mostraremos los modelos y los precios de par de Pantalones, presione aceptar..");

            do{
                var modelo = parseInt(prompt("Opcion 1 = Modelo 'Jeans', Precio: $6.000 Opcion 2 = Modelo 'joggis', Precio: $4.000  Opcion 3 = Modelo: 'bermudas', Precio: $5.760"));

                SeleccionPants(modelo);

                console.log(suma);

                alert("llevas gastando " + suma);

                var bucle = parseInt(prompt("desea continuar comprando pantalones? 1 = 'SI',  2 = 'volver a las opciones anteriores' "));

                console.log(bucle);
                

            }while(bucle == 1);

            break;

            case 3 : 
            alert("Elgiste la opcion de Buzos!, a continuacion le mostraremos los modelos y los precios de par de Buzos, presione aceptar..");

            do{
                var modelo = parseInt(prompt("Opcion 1 = Modelo 'Canguro', Precio: $15.000 Opcion 2 = Modelo 'Deportivos', Precio: $11.000  Opcion 3 = Modelo: 'Buzo campera', Precio: $17.230"));

                SeleccionBuzos(modelo);

                console.log(suma);

                alert("llevas gastando " + suma);

                var bucle = parseInt(prompt("desea continuar comprando buzos? 1 = 'SI',  2 = 'volver a las opciones anteriores' "));

                console.log(bucle);
                

            }while(bucle == 1);
            break;

            default: 
                    alert("Ingrese una opcion valida!!");
                    break;

           


    }
    alert("Bien, que desea hacer? ");
    option = parseInt(prompt("opcion 1 = zapatillas, Opcion 2 = pantalones, Opcion 3 = Buzos, Precione '0' ya no quiero comprar mas productos.."));
}

console.log(option);

alert("De acuerdo la suma total es de: $" + suma  + " presiona 'aceptar' para ingresar al carro del compra y realizar el pago!!");

alert(" Ohhhh!! :C , lo sentimos!, Aun no pudimos contruir el area del carrito, pero pronto lo Haremos!!!, Gracias por su compra! ");



