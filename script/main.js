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
    let rowCount = dataLength();

    for (let i = 0; i < rowCount; i++) {
        let row = {
            id: i,
            productName: $(`#productName${i}`).val(),
            quantity: $(`#quantity${i}`).val(),
            price: $(`#price${i}`).val(),
        };
        data.push(row);
    }
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
            <td>${rowCount + 1}</td>
            <td><input type="text" id="productName${rowCount}" class="form-control" placeholder="Producto" required></td>
            <td><input type="number" id="quantity${rowCount}" class="form-control" placeholder="Cantidad" required></td>
            <td><input type="number" id="price${rowCount}" class="form-control" placeholder="Precio" required onblur="sumTotals()"></td>
            <td><button type="button" class="btn btn-danger" onclick="deleteRow(this)">Eliminar</button></td>
        </tr>
    `;
        $('#tblBuys tbody').append(newRow);
        showTotal();
}

function saveData(invoiceData) {
    finalData.push(invoiceData);
    console.log(finalData);
}

function printResult() {
    $('#tblResult tbody').empty();
    finalData.forEach((invoice) => {
        let newRow = `
        <tr>
            <td>${invoice.dayBirth}</td>
            <td>${invoice.name}</td>
            <td>${invoice.products.length}</td>
            <td>${invoice.total}</td>
            <td><button type="button" class="btn btn-warning" onclick="editRow()">Editar</button></td>
        </tr>
    `;
        $('#tblResult tbody').append(newRow);
    })
}

function editRow() {


    $('#form1 #name').val(finalData[0].name).focus();
    $('#form1 #email').val(finalData[0].email);
    $('#form1 #identification').val(finalData[0].identification);
    $('#form1 #dayBirth').val(finalData[0].dayBirth);
    $('#form1 #isUserActive').is(finalData[0].isUserActive);
    $('#totalR').val(finalData[0].total);
    $('#tblResult').empty();



}

function deleteRow(deleteButton) {
    $(deleteButton).parent().parent().remove();
    sumTotals();
}

function sumTotals() {
    let total = 0;
    let rowCount = dataLength();
    for (let i = 0; i < rowCount; i++) {
        total += parseFloat($(`#price${i}`).val());
    }
    totalProduct = total;
    printTotal();
}

function printTotal() {
    $('#totalR').html(totalProduct);
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
