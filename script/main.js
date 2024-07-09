let finalData = [];

function procesar() {


    //Hacer un objeto del formulario
    let tblDatos = document.getElementById('tblDatos');
    let dato = document.getElementById('tblDatos').rows.length;
    const formulario = document.forms['form1'];
    const registro = {
        "nombre": formulario.elements[0].value,
        "activo": formulario.elements[1].value,
        "email": formulario.elements[2].value,
        "identificacion": formulario.elements[4].value,
        "fechaNacimiento": formulario.elements[5].value,
        products: []
    };
    //Mostrar en consola Arreglo

    console.log(registro);

        document.getElementById('impresionNombre').innerHTML =`Nombre: ${registro.nombre}` ;
        document.getElementById('impresionCedula').innerHTML =`Identificación: ${registro.identificacion}` ;

        for (let i = 1; i < dato; i++) {

        registro.products.push(
            {
                'producto': tblDatos.rows[i].cells[1].innerHTML,
                'numero': tblDatos.rows[i].cells[2].innerHTML,
                'valor': tblDatos.rows[i].cells[3].innerHTML,
            }
        );

    }

     //Impresion en tabla
    
    for(let i=0;i<dato-1;i++){

    let resultadosBody = document.getElementById('resultadosBody').insertRow(0);
    let col1 = resultadosBody.insertCell(0);
    let col2 = resultadosBody.insertCell(1);

    col1.innerHTML = registro.products[i].producto;
    col2.innerHTML = registro.products[i].numero;
    
    }

   finalData.push(registro);
    console.log(finalData);
}


function insertarFila() {

    let dato = document.getElementById('tblDatos').rows.length;
    let tblDatos = document.getElementById('tblDatos').insertRow(dato);
    let col1 = tblDatos.insertCell(0);
    let col2 = tblDatos.insertCell(1);
    let col3 = tblDatos.insertCell(2);
    let col4 = tblDatos.insertCell(3);

    col1.innerHTML = `<input type="number" name="idProducto" id=idProducto${dato}  value= ${dato} class="form-control">`;
    col2.innerHTML = `<input type="text" name="datoProducto" id=producto${dato}  class="form-control">`;
    col3.innerHTML = `<input type="number" name="datoNumero" id=numero${dato}  class="form-control">`;
    col4.innerHTML = `<input type="number" name="datoValor" id=valor${dato} class="form-control">`;


}

function eliminarFila() {
    //Preguntar que numero de id quiera borrar
    let NumeroEliminar = parseInt(prompt('Digite en numero de registro que quiere eliminar:'));

    //Eliminar row
    const tr = document.getElementById('tblDatos');
    tr.deleteRow(NumeroEliminar);
    console.log("Eliminado");

}

function guardarFila() {
    //Obtener tabla y numero de rows
    let dato = document.getElementById('tblDatos').rows.length;
    let tblDatos = document.getElementById('tblDatos');
    //Consultar Valores que se llenan en tablas
    let idProducto = document.getElementById(`idProducto${dato - 1}`).value;
    let producto = document.getElementById(`producto${dato - 1}`).value;
    let numero = document.getElementById(`numero${dato - 1}`).value;
    let valor = document.getElementById(`valor${dato - 1}`).value;

    //Asignar en tabla valores
    // tblDatos.rows[dato-1].cells[0].innerHTML=`<p id=idProducto${dato-1}>${dato-1}</p>`;
    tblDatos.rows[dato - 1].cells[0].innerHTML = idProducto;
    tblDatos.rows[dato - 1].cells[1].innerHTML = producto;
    tblDatos.rows[dato - 1].cells[2].innerHTML = numero;
    tblDatos.rows[dato - 1].cells[3].innerHTML = valor;

}








