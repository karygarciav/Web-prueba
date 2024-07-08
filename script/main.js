



function procesar(){
    const formulario= document.forms['form1'];
    const registro= {
        "nombre": formulario.elements[0].value,
        "activo": formulario.elements[1].value,
        "email": formulario.elements[2].value,
        "identificacion": formulario.elements[4].value,
        "fechaNacimiento": formulario.elements[5].value,
    }
    console.log(formulario);
    console.log(registro);

}


function insertarFila(){
        let dato=document.getElementById('tblDatos').rows.length;
        let tblDatos=document.getElementById('tblDatos').insertRow(dato);
        let col1= tblDatos.insertCell(0);
        let col2= tblDatos.insertCell(1);
        let col3= tblDatos.insertCell(2);
        let col4= tblDatos.insertCell(3);

        col1.innerHTML = `<input type="number" name="idpersona" id=idpersona${dato}  value= ${dato} class="form-control">`  ;
        col2.innerHTML = `<input type="text" name="datoNombre" id=nombre${dato}  class="form-control">` ;
        col3.innerHTML = `<input type="numbre" name="datoNumero" id=numero${dato}  class="form-control">`;
        col4.innerHTML = `<input type="text" name="datoemail" id=email${dato} class="form-control">`;


}

function eliminarFila(){
        let NumeroEliminar= parseInt(prompt('Digite en numero de registro que quiere eliminar:'));


       const tr = document.getElementById('tblDatos');
       tr.deleteRow(NumeroEliminar);
       console.log("Eliminado");



}

function guardarFila(){

    let dato=document.getElementById('tblDatos').rows.length;
    let tblDatos=document.getElementById('tblDatos').insertRow(dato);
    let col1= tblDatos.insertCell(0);
    let col2= tblDatos.insertCell(1);
    let col3= tblDatos.insertCell(2);
    let col4= tblDatos.insertCell(3);

    let nombre = document.getElementById(`nombre${dato-1}`).value;
    let numero = document.getElementById(`numero${dato-1}`).value;
    let  email = document.getElementById(`email${dato-1}`).value;
    // let tblDatos=document.getElementById('tblDatos');
    col1.innerHTML = `<input type="number" name="idpersona" id=idpersona${dato}  value= ${dato} class="form-control">`  ;
    col2.innerHTML = `<hr>${nombre}</hr>`;
    col3.innerHTML = `<input type="numbre" name="datoNumero" id=numero${dato}  class="form-control">`;
    col4.innerHTML = `<input type="text" name="datoemail" id=email${dato} class="form-control">`;



    console.log(guardar);






}
