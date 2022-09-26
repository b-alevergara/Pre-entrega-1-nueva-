//captura de formulario

function captura(){
    class Persona {
        constructor(nombre, email, tema, comentarios) {
            this.nombre = nombre;
            this.email = email;
            this.tema = tema;
            this.comentarios = comentarios;
        }
    }
    let capturaNombre = document.getElementById("aNombre").ariaValueMax;
    // console.log(capturaNombre)
    let capturaEmail=document.getElementById("aEmail").value;
    let capturaTema=document.getElementById("aTema").value;
    let capturaComentarios=document.getElementById("aComentarios").value;

    nuevaPersona= new Persona(capturaNombre,capturaEmail,capturaTema,capturaComentarios); //sin let deberia funcionar esta variable afuera de la funcion
    console.log(nuevaPersona);
    pushDatos()
}

let datos =[];
function pushDatos(){
    datos.push(nuevaPersona);
    console.log(datos);
    }
//de aqui pasar a validar los datos

//los datos me gustaria enviarlos a mi correo electronico para contactar al cliente(creo que necesito backend para esto)