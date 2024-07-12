let finalData = [];

function dataLength() {
    return $('#tblBuys tbody tr').length;
}

function cleanForm() {
    $('#form1')[0].reset();
    $('#tblBuys tbody').empty();
}

function getProducts() {
    let data = [];
    let rowCount = dataLength();
    for (let i = 0; i < rowCount; i++) {
        let row = {
            id: i,
            productName: $(`#productName${i}`).val(),
            quantity: $(`#quantity${i}`).val(),
            price: $(`#price${i}`).val()
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
        products: getProducts()
    };
}

function insertRow() {
    let rowCount = dataLength();
    let newRow = `
        <tr>
            <td>${rowCount + 1}</td>
            <td><input type="text" id="productName${rowCount}" class="form-control" placeholder="Producto" required></td>
            <td><input type="number" id="quantity${rowCount}" class="form-control" placeholder="Cantidad" required></td>
            <td><input type="number" id="price${rowCount}" class="form-control" placeholder="Precio" required></td>
            <td><button type="button" class="btn btn-danger" onclick="deleteRow(${rowCount})">Eliminar</button></td>
        </tr>
    `;
    $('#tblBuys tbody').append(newRow);
}

function deleteRow(rowIndex) {
    $('#tblBuys tbody tr').eq(rowIndex).remove();
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
            <td>0</td>
        </tr>
    `;
        $('#tblResult tbody').append(newRow);
    })
}

$(function() {

});
