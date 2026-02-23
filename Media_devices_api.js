//Solicitar permisos para uso de camara y microfono
const button = document.querySelector(".button");

button.addEventListener(`click`,async()=>{

try {
    await navigator.mediaDevices.getUserMedia({video:true, audio:true
});
const permission =await Notification.requestPermission();

console.log(`ESTADO DEL PERMISO ${permission}`);

if (permission=== `granted`){
    new Notification("permisos concedidos",{
body: "¡CAMARA Y MICROFONO ACTIVADOS!",
icon: "Acces/Icons/image.jpg"
    });
}
}catch(ERROR){
        console.log(`ERROR AL SOLUCITAR EL PERMISOS`);
        altert (`NO SE CONCEDIERON LOS PERMISOS SOLICITADOS`)
    
    }
});