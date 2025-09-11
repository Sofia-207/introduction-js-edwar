//Angie Sofia Guapacha Largo
//Metodos para los objetos
//Con esta linea de codigo garantizo buenas practicas
'use strict';

const product={
    productName:"semsor de humedad",
    price:300,
    available: true,
}

const speedMax = 80;
//speedMax=70;
console.log(speedMax);

//aunque el objeto product este declarado como constante permite agregar propiedades.
product.quantity=10;
console.log(product);

//Con el metodo o función bloqueamos el objeto para que no se puedan agregar más propiedades.
//Object.freeze(product);

//Si usamos el metodo seal no podemos agregar ni eliminar pero si se puede editar o modificar una propiedaad.
Object.seal(product);

//Vamos agregar una nueva propiedad con color
//product.color="pink";

//Forma de saber si un objeto esta bloqueado
console.log ("El objeto está bloqueado? " + Object.isFrozen(product));

if (object.isFreezen(product)){
    let response= "si";
    }else{
        response="No"
    }
    console.log("El objeto esta bloqueado? " + response);
    //Eliminar una propiedad de un objeto
   // delete product.price;
    //console.log(product);

    //Modificar o editar las propiedades de un objeto
    //product.productName="sensor de PH";
    //console.log(product);


