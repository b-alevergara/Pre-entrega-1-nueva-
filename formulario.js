//evento submit para mandar la info capturada del form
//e inicio elementos
function enviarFormulario(){
    const enviar=document.getElementById("botonEnviar")
    enviar.addEventListener("submit", (evento)=>{
        evento.preventDefault();//corregir el html de onclick a onsubmit

//aqui puedo meter la funcion captura y new persona con el push

    let nombre=document.getElementById("capturaNombre").value;
    let email=document.getElementById("capturaEmail").value;
    let seleccion=document.getElementById("seleccionTema").value;
    let comentarios=document.getElementById("comentarios").value;
    //un ciclo para validar que los campos son llenados correctamente
        //error en las validaciones, porque no se ejecutan correctamente
        //CORREGIR
    if(nombre === ""){  //revisar que estos criterios funcionen
        alert("El nombre es un campo obligatorio.");
        document.getElementById("capturaNombre").focus();
    }else{
        if(email === ""){
        alert("El e-mail es indispensable para comunicarnos con usted");
        document.getElementById("capturaEmail").focus();
    }else{
//imprimo en consola los campos que el usuario llena y despues dejo en blanco los campos para volver a iniciar el formulario
        console.log(nombre +""+ email+""+seleccion+""+comentarios)
        document.getElementById("capturaNombre").value=""
        document.getElementById("capturaEmail").value=""
        document.getElementById("seleccionTema").value=""
        document.getElementById("comentarios").value=""
        //probar si funciona el console log y cambia los campos a blancos
        document.getElementById("capturaNombre").focus();
    }}
    })}
function main(){enviarFormulario();}
main()
