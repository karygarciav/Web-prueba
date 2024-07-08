



function procesar(){
    const formulario= document.forms['form1'];
    const registro= {
        "nombre": formulario.elements[0].value,
        "activo": formulario.elements[1].value,
        "email": formulario.elements[2].value,
        "identificacion": formulario.elements[4].value,
        "fechaNacimiento": formulario.elements[5].value,
    }

   // registro.push(registro);
    //formulario.reset();
    console.log(formulario);
    console.log(registro);



}

/*
let hola=document.querySelector('#form1').value;

console.log(hola);

addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target.datoNombre)
    )
    console.log(data);
});*/

/*
function captura() {
    let data = array();

    data=document.getElementById('form1').values;

    console.log(data.'nombre');


}*/