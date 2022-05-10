var selectedRow = null
function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            addNewFilm(formData);
		}
        else{
            updateInfo(formData);
		}
        resetForm();    
}
function readFormData(){
    var formData = {};
    formData["film"] = document.getElementById("film").value;
    formData["director"] = document.getElementById("director").value;
    formData["year"] = document.getElementById("year").value;
    formData["rating"] = document.getElementById("rating").value;
    return formData
}

function addNewFilm(data) {
    var table = document.getElementById("filmCatalog").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.film;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.director;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.year;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.rating;
    var cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("film").value = selectedRow.cells[0].innerHTML;
    document.getElementById("director").value = selectedRow.cells[1].innerHTML;
    document.getElementById("year").value = selectedRow.cells[2].innerHTML;
    document.getElementById("rating").value = selectedRow.cells[3].innerHTML;
}
function updateInfo(formData) {
    selectedRow.cells[0].innerHTML = formData.film;
    selectedRow.cells[1].innerHTML = formData.director;
    selectedRow.cells[2].innerHTML = formData.year;
    selectedRow.cells[3].innerHTML = formData.rating;
}

function onDelete(td) {
    if (confirm('Do you want to delete this fllm?')) {
        row = td.parentElement.parentElement;
        document.getElementById('filmCatalog').deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("film").value = '';
    document.getElementById("director").value = '';
    document.getElementById("year").value = '';
    document.getElementById("rating").value = '';
    selectedRow = null;
}