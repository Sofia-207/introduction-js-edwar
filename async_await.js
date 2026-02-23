//Asyc await son caracteristicas de JS que gacilitan trabajar con funciones asincronas, permitiendo escribir codigo que se parece masm al sincrono y mas facil de leer 

//antes del 2015 se usaba .then() y cath(), pero ahora se usa async y await, que internamente siguen usando promesas.

//Asyc: Declara una función asicrónica, que siempre devuelve una promesa
//Await: Pausa la ejecución de la función async hasta que una promesa se resuelve o rechaza , devolvciendo como resultado una promesa

//============================================================================

//Ejemplo con una función que se cumple

function downLoadNewClients(){
    return new Promise (resolve =>{
        console.log("Descargando clientes... espere por favor.");
    
        setTimeout(() => {
            resolve("Los clientes fueron descargados...")
        }, 3000);
    })

    };

async function app() {
    try{
        //const clients = downLoadNewClients();

        //Código bloqueado hasta que se resuelva la promesa
        console.log("Código que SI bloquea");
    //} catch (error){
    //    console.log(error);

    //Ahora se va a intentar una forma mas eficiente sin que dependa una de la otra

    const  result = await Promise.all([downLoadNewClients(),
        downLoadLastOrder()])
        console.log ("Codigo que SI se bloquea");
        console.log(result[0]);
        console.log(result[1]);
    } catch (error){
        console.log (error);
    }
}

app();
console.log("Código que no se bloquea");