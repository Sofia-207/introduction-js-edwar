//Angie Sofia Guapacha Largo
//Objetos en JS

//aquí tenemos 3 variables
const productName= "sensor de humedad";
const prince=300;
const available=true;

//Este es un objeto llamado product que almacena
const product={
    productName:"semsor de humedad",
    price:300,
    available:true
}
console.log(product);
console.log(typeof product);
console.log(product.productName);
console.log(product.price);
console.log(product.available);

//Para acceder a las diferentes propiedades de un objeto lo hacemos de la siguiente manera

console.log("nombre del producto es:" + product.productName);
console.log("el precio del producto es:" + product.price);
console.log("el producto esta disponible?" + product.available);

// Agregar propiedades al objeto
product.image="imagen.jpg";
console.log(product);