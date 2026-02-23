//El objeto literal
//Esta es la forma más común , pero no es muy común que digamos 
// De esta forma el el objeto tiene diferetes variables 

const product = {
    ProductName :"Mouse",
    productPrice:50000,
    productColor :"red",
}

//---------------------------------------------------------------
//El objeto constructor 
// Este objeto constructor sabe contener todos los diferentes valores que van a formar parte del objeto
// En los parentesis de la funcion llegan parametros

function product (productName, productPrice, productColor){
this.productName= productName;
this.productPrice=productPrice;
this.productColor=productColor;
}

// Asi se crea un segundo objeto con el objeto literal 

const product2 = {
    productName  : "key board",
    productPrice : 80000,
    productcolor : "blue",
}

const product3= new product("Mouse", 35000, "green");
const product4= new product("Cell phone", 45000, "black");
const product5= new product("headphones", 150000, "white");

console.log(product3);
console.log(product4);
console.log(product5);