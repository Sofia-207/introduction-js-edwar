//Ejercicio con la clase carro vamos a heredar dos tipos de carros distintos

class fullcar {
    constructor(brand,color,model,id,airconditioned,sonroof){
        this.brand = brand;
        this.color = color;
        this.model = model;
        this.id = id;
        this.airconditioned = airconditioned
        this.sonroof = sonroof

    }

    run(){
        return`El vehiculo ${this.brand} esta arrancando`
    }
};

class BasicCar extends fullcar{
    constructor(grand,color,model,id,airconditioned){
        super(grand,color,model,id,airconditioned,``)
    };

    runMiddiCar(){
        return`${super.run()}`
    }
};

const car5 = new BasicCar ("ford", "Pink", "Fiesta", 100000, true, true);
console.log(car5.runMiddiCar());