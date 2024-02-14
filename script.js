document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var gender = document.getElementById('gender').value;
    var foods = [];
    var foodCheckboxes = document.getElementsByName('food');
    for (var i = 0; i < foodCheckboxes.length; i++) {
        if (foodCheckboxes[i].checked) {
            foods.push(foodCheckboxes[i].value);
        }
    }
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;
    
    var newRow = document.getElementById('tableBody').insertRow();
    newRow.innerHTML = `<td>${firstName} ${lastName}</td><td>${address}</td><td>${pincode}</td><td>${gender}</td><td>${foods.join(', ')}</td><td>${state}</td><td>${country}</td>`;
    
    document.getElementById('myForm').reset();
});
