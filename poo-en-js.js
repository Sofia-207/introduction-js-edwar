//Programación orientada a objetos
//Una clase en JS es una plantilla crear objetos, que comparten mismas propiedades y métodos 
//Una clase es como un molde que describe como serán los objetos y que podrán hacer hacer

class Product {
    constructor(productName, productPrice){
        this.productName = productName;
        this.productprice = productPrice;
    }

    formatProduct(){
        return `El producto ${this.productName} tiene un precio de ${this.productprice}`
    }
};

const product1 =new product("remote control", 15000)
const product2 =new product("SSD", 220000)

console.log(product1.formatproduct());
console.log(product2.formatproduct());

//=============================================================
// Herencia en JS permite que los objetos reutilicen 
// propiedades y métodos de otros 

class Book extends Product{
    constructor(bookName, bookPrice, isbn){
        super(bookName. bookPrice);
        this.isbn = isbn;
    }

    formatbook (){
        return `${super.formatProduct()} y su ISBN es ${this.isbn}`;
    }
};

const book1 = new Book  ("El perfume", 20000, 13579);

console.log(book1.formatbook());