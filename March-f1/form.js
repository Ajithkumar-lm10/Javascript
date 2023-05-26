function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const food = Array.from(document.querySelectorAll('select[name="food[]"] option:checked')).map(o => o.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    
    // Create table row and append to table
    const table = document.getElementById('dataTable');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);
    const cell8 = row.insertCell(7);
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = food.join(', ');
    cell7.innerHTML = state;
    cell8.innerHTML = country;
    
    // Clear form fields
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('address').value = '';
    document.getElementById('pincode').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    Array.from(document.querySelectorAll('select[name="food[]"] option:checked')).forEach(o => o.selected = false);
    document.getElementById('state').value = '';
    document.getElementById('country').value = '';
  }