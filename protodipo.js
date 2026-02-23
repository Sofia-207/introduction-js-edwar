//El prototipo es como un molde o modelo base
// Para este ejemplo voy a guardar las funciones comunes a un lugar 
//lamada a un prototipo asi el mismo objeto del mismo tipo pueden heredarlas

function car (brand, modelo, color){
    this.brnd=brand;
    this.brnd=modelo;
    this.brnd=color;
}

const car1 =new car ("Suzuki", "frons", "Yellow")
const car2 =new car ("Honda", "mars", "Gray")

console.log(car1);
console.log(car2);

car.prototype.stop=function(){
console.log(`El carro ${this.brand} Está parando`);
};

car1.stop();
car2.stop();

