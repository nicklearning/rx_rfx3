document.addEventListener('DOMContentLoaded', function () {
    const addMedicationBtn = document.querySelector('.add-medication-btn');
    const saveMedicationBtn = document.getElementById('saveMedication');
    const medicationItems = document.querySelector('.medication-items');
    const printMedicationListBtn = document.querySelector('.print-medication-list-btn');

    function showModal() {
        var myModal = new bootstrap.Modal(document.getElementById('medicationAddModal'));
        myModal.show();
    }

    addMedicationBtn.addEventListener('click', showModal);

    saveMedicationBtn.addEventListener('click', function () {
        const medicationName = document.getElementById('medicationName').value;
        const strength = document.getElementById('strength').value;
        const dosage = document.getElementById('dosage').value;
        const frequency = document.getElementById('frequency').value;
        const route = document.getElementById('route').value;
        const duration = document.getElementById('duration').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
        <td>${medicationName}</td>
        <td>${strength}</td>
        <td>${dosage}</td>
        <td>${frequency}</td>
        <td>${route}</td>
        <td>${duration}</td>
            <td><button class="remove-btn btn btn-danger btn-sm">Remove</button></td>
        `;
        medicationItems.appendChild(newRow);

        newRow.querySelector('.remove-btn').addEventListener('click', function () {
            newRow.remove();
        });

        document.getElementById('medicationForm').reset();
        var myModalEl = document.getElementById('medicationAddModal');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();
    });
    // Add event listener for the print button
    printMedicationListBtn.addEventListener('click', function () {
        window.print(); // Use the browser's print functionality
    });
});