// This es una palabra reservada del sistema , o sea que No se puede crear ni funciones ni variables con este nombre 

const reservation = {
    userName : "Angie",
    lastName : "Sofia",
    userAge : 18,
    total : 100000,
    isPaid : false,

    // Los objetos pueden contener funciones

    information : function(){
        console.log(`El cliente ${this.userName} ${this.lastName} reservo y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    }
}
    reservation.information();

    const reservation2 = {
    userName : "Andrea",
    lastName : "Gomez",
    userAge : 20,
    total : 150000,
    isPaid : true,

    // Los objetos pueden contener funciones

    information : function(){
        console.log(`El cliente ${this.userName} ${this.lastName} reservo y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    }
}
    reservation2.information();

    const reservation3 = {
    userName : "Angie",
    lastName : "lopez",
    userAge : 20,
    total : 500000,
    isPaid : true,

    // Los objetos pueden contener funciones

    information : function(){
        console.log(`El cliente ${this.userName} ${this.lastName} reservo y la cantidad a pagar es ${this.total}, hasta el momento el estado del pago es ${this.isPaid}`);
    }
}


     // This en este contexto hace referencia al objeto sobre el cual se esta mandando a llamar 
     // Es obligacion usar la funcion de esta manera , por esta hacer referencia al objeto que se esta usando.


reservation.information();
reservation2.information();
reservation3.information();

// Si se usa Arrow function no es capaz de leer los datos del contexto, dando

