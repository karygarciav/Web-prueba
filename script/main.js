

let finalData = [];


    function dataLength() {
    // var nRow = $("#tblBuys tr").length;
    let tablelength = $('#tblBuys tr').length;

    return tablelength;
}

    function saveForm() {

    let tblBuys = document.getElementById('tblBuys');
    let tblLength = dataLength();
    const form1 = document.forms['form1'];
    let nombre2= $("input:text[name=name]").val();

    console.log(nombre2);

    const register = {

        "name": $("input:text[name=name]").val(),
        "active": $("input[type=checkbox][name=active]").val(),
        "email": $("input[type=email][name=email]").val(),
        "identification":$("input[type=number][name=identification]").val(),
        "dayBirth": $("input[type=date][name=dayBirth]").val(),

        products: []

    };

    /* "name": form1.elements[0].value,
        "active": form1.elements[1].value,
        "email": form1.elements[2].value,
        "identification": form1.elements[4].value,
        "dayBirth": form1.elements[5].value,*/

    //Mostrar en consola Arreglo

    console.log(register);

    for (let i = 1; i < tblLength; i++) {

        register.products.push(
            {
                'product': tblBuys.rows[i].cells[1].innerHTML,
                'numberP': tblBuys.rows[i].cells[2].innerHTML,
                'price': tblBuys.rows[i].cells[3].innerHTML,
            }
        );

    }
    return register;
}

    function printBill(data) {

    //Impresion en tabla

    let tblResults = document.getElementById('tblResults').insertRow(0);
    let cell1 = tblResults.insertCell(  0);
    let cell2 = tblResults.insertCell(  1);
    let cell3 = tblResults.insertCell(  2);
    cell1.innerHTML = data.name;
    cell2.innerHTML = data.identification;
    cell3.innerHTML = data.products.length;

}

    function process() {

            $('#tblResults').empty();

            let tblLength = dataLength();

            //Hacer un objeto del formulario
            if (tblLength > 1) {

                const register = saveForm();
                printBill(register);
                finalData.push(register);
                console.log(finalData);

            } else {

                window.alert('Tiene que guardar al menos un dato de compra');

            }



    }

    function insertRow(){

            $("#btnSave").show();
            let tblLength = dataLength();
            let tblBuys = document.getElementById('tblBuys').insertRow(tblLength);

            let cell1 = tblBuys.insertCell(0);
            let cell2 = tblBuys.insertCell(1);
            let cell3 = tblBuys.insertCell(2);
            let cell4 = tblBuys.insertCell(3);

            cell1.innerHTML = `<input disabled type="number" name="idProduct" id=idProduct${tblLength}  value= ${tblLength} class="form-control">`;
            cell2.innerHTML = `<input type="text" name="datoProducto" id=product${tblLength}  class="form-control">`;
            cell3.innerHTML = `<input type="number" name="datoNumero" id=numberP${tblLength}  class="form-control">`;
            cell4.innerHTML = `<input type="number" name="price" id=price${tblLength} class="form-control">`;




    }

    function deleteRow() {

        //Preguntar que numero de id quiera borrar
            let deletItem = parseInt(prompt('Digite en numero de registro que quiere eliminar:'));
            console.log(deletItem);

            //Eliminar row
            const tr = document.getElementById('tblBuys');
            tr.deleteRow(deletItem);
            window.alert('Dato ha sido Eliminado');


            process();


    }

    function saveRow() {

        $("#btnSave").hide();
        //Obtener tabla y numero de rows
        let tblLength = dataLength();

        let tblBuys = document.getElementById('tblBuys');

        //Consultar Valores que se llenan en tablas

        let idProduct = document.getElementById(`idProduct${tblLength - 1}`).value;
        let product = document.getElementById(`product${tblLength - 1}`).value;
        let numberP = document.getElementById(`numberP${tblLength - 1}`).value;
        let price = document.getElementById(`price${tblLength - 1}`).value;

        //Asignar en tabla valores
        tblBuys.rows[tblLength - 1].cells[0].innerHTML = idProduct;
        tblBuys.rows[tblLength - 1].cells[1].innerHTML = product;
        tblBuys.rows[tblLength - 1].cells[2].innerHTML = numberP;
        tblBuys.rows[tblLength - 1].cells[3].innerHTML = price;

        $("#btnPlus").show();


    }


    $(function() {

    //Mostrar y esconder botones de agregar
    $("#btnDelete").hide();
    $("#btnSave").hide();

    $("#btnPlus").click( function(){
        $("#btnPlus").hide();
        $("#btnDelete").show();
    });

    //Inicializando Botones

    $("#btnPlus").click(function (){
        insertRow();
    });
    $("#btnSave").click(function (){
        saveRow();
    });
    $("#btnDelete").click(function (){
        deleteRow();
    });


});












