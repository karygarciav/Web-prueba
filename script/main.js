const nombre=document.getElementById("nombre");
const email=document.getElementById("email");
const password=document.getElementById("password");






function captura(){

    const nombre=document.getElementById("nombre").value;
    if(nombre==="") {
        alert('Por favor llenar campo nombre');
        document.getElementById("nombre").focus;
    }else{
        console.log(nombre);
    }


}