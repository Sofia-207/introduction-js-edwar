//Try catch
//es una estructura para manejar errores en un tiempo de ejecucuión , permitiendo que el programa continue
//ejecuandose sin fallar completamente
// Try: dentro de este bloque puede generar un error.
//Catch: Captura al error si ocurre dentro de try  y permite manejarlo

const num1 = 20;
const num2 = 30;

console.log(num1);

try{
    console.log(num2);
}catch (error){
    console.log("Error la variable no existe");

}

console.log(num2);
//================================================
//Ejercicio 2

try {
    console.log(x);
} catch (error){
console.log("Ocurrio un error", error.message);

} 

    //=============================================================

    function divide (num5,num6) {
        try{
            if (num6==0)throw "No se puede dividir entre seno"
            return num5/num6;
        } catch (error){
            return"Error", error;                   
        }
    }