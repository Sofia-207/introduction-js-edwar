//Classes: clearer syntax 

//Fetch API. Es una función JS que permite hacer peticiones HTTP,GET,POST,PUT,DELETE,etc. Es una API moderna.

function getEmployees(){
    //Fetch (`Aqui se copia la URL), Ejemplo pinterest.com`)
    //Aunque para este caso estamos haciendo una petición a un archivo local
    //fetch("/data/employees.json");

    const file = "/data/employees.json";

    fetch(file)
    //Obtenemos los datos
    .then((result)=> {
        return result.json();
    })
    //Este then es para acceder a los datos

    .then(data =>{

        const {Employees}= data;
        Employees.forEach( Employe=>{

            console.log(Employe.id);
            console.log(Employe.user);
            console.log(Employe.job
                );
                document.querySelector(`.content`).textContent = Employe.user;
        
        })
        console.log(Employees);

    });
}

getEmployees();