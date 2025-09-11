//Angie Sofia Guapacha Largo
//Desesctructuracion de objetos

const product={
    productName:"semsor de humedad",
    price:300,
    available:true
}
// aqui un ejemplo de desestructuración de objetos

const productPrice= product.price;
//const productName= product.productName;

console.log(productPrice);
console.log(product.producName);

// para que sirve el destruturing? sirve para extraer los valores de un objeto

const {price, available, productName}= product;
console.log(price, available, productName);