let finalData = [];
let totalProduct = 0;


function dataLength() {
    return $('#tblBuys tbody tr').length;
}

function cleanForm() {
    $('#form1')[0].reset();
    $('#tblBuys tbody').empty();
    $('#totalR').empty();
}

function getProducts() {
    let data = [];
    $('#tblBuys tbody tr').each(function (i, trHtml) {
        let row = {
            id: i,
            productName: $(trHtml).find('td').eq(1).find('input').val(),
            quantity: parseFloat($(trHtml).find('td').eq(2).find('input').val()),
            price: parseFloat($(trHtml).find('td').eq(3).find('input').val()),
        };
        console.log(row);
        data.push(row);
    });
    return data;
}

function saveForm() {
    return {
        name: $("#name").val(),
        isUserActive: $("#isUserActive").is(":checked"),
        email: $("#email").val(),
        identification: $("#identification").val(),
        dayBirth: $("#dayBirth").val(),
        total: totalProduct,
        products: getProducts()

    };

}

function showTotal() {

    $('#titleTotal').show();
    $('#totalR').show();
}

function insertRow() {
    let rowCount = dataLength();
    let newRow = `
        <tr>
            <td id="colId${rowCount}">${rowCount + 1}</td>
            <td><input type="text" id="productName${rowCount}" class="form-control" placeholder="Producto" required></td>
            <td><input type="number" id="quantity${rowCount}" class="form-control" placeholder="Cantidad" required></td>
            <td><input type="number" id="price${rowCount}" class="form-control" placeholder="Precio" required onblur="sumTotals()"></td>
            <td><button type="button" class="btn btn-danger" onclick="deleteRow(this)">Eliminar</button></td>
        </tr>
    `;
        $('#tblBuys tbody').append(newRow);
        showTotal();
}

function printTotal() {
    $('#totalR').html(totalProduct);
}

function saveData(invoiceData) {
    finalData.push(invoiceData);
    console.log(finalData);
}

function printResult() {
    $('#tblResult tbody').empty();
    finalData.forEach((invoice, index) => {
        let newRow = `
            <tr>
                <td>${invoice.dayBirth}</td>
                <td>${invoice.name}</td>
                <td>${invoice.products.length}</td>
                <td>${invoice.total}</td>
                <td><button type="button" class="btn btn-warning" onclick="editRow(${index})">Editar</button></td>
            </tr>
        `;
        $('#tblResult tbody').append(newRow);
    });
}

function sumTotals() {
    let total = 0;

    $('#tblBuys tbody tr').each(function (i, trHtml) {

            let valor= parseFloat($(trHtml).find('td').eq(3).find('input').val());
            total += valor;
    });

    totalProduct = total;
    printTotal();

}

function insertRowEdit(row) {
    finalData[row].products.forEach((product, i) => {
        let newRow = `
            <tr>
                <td>${i+ 1}</td>
                <td><input type="text" id="productName${i}" class="form-control" placeholder="Producto" required value="${product.productName}"></td>
                <td><input type="number" id="quantity${i}" class="form-control" placeholder="Cantidad" required value="${product.quantity}"></td>
                <td><input type="number" id="price${i}" class="form-control" placeholder="Precio" required oninput="sumTotals()" value="${product.price}"></td>
                <td><button type="button" class="btn btn-danger" onclick="deleteRow(this)">Eliminar</button></td>
            </tr>
        `;
        console.log(product, i);
        $('#tblBuys tbody').append(newRow);
    });
    showTotal();
    printTotal();
}

function editRow(index) {


   let buttonEdit=`<button id="editFinalD" type="submit"  
        onClick="saveEditData(${index})" class="btn btn-warning">Guardar Edición</button>`;

    $('#sendForm').hide();
    $('#form1 #name').val(finalData[index].name).focus();
    $('#form1 #email').val(finalData[index].email);
    $('#form1 #identification').val(finalData[index].identification);
    $('#form1 #dayBirth').val(finalData[index].dayBirth);
    $('#form1 #isUserActive').is(finalData[index].isUserActive);
    $('#totalR').val(finalData[index].total);
    insertRowEdit(index);
    console.log();
    $('#buttonDiv').append(buttonEdit);


}

function deleteRow(deleteButton) {

    $(deleteButton).parent().parent().remove();
    sumTotals();

}

function saveEditData(index){

    if (dataLength() === 0) {


    } else {
        const register = saveForm();
        finalData[index]=register;
        console.log(finalData);
        printResult();
        cleanForm();
        $('#sendForm').show();
    }


    $('#editFinalD').remove();


}

function submitForm() {
    if (dataLength() === 0) {
        alert('Tiene que guardar al menos un dato de compra');
    } else {
        const register = saveForm();
        saveData(register);
        printResult();
        cleanForm();
    }
}



$(function() {

    $('#titleTotal').hide();
    $('#totalR').hide();


});
