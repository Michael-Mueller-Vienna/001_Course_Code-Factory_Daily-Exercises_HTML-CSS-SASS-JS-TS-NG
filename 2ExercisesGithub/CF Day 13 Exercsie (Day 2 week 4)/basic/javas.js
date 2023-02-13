function showDetails(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var details = document.getElementById("details");
    details.innerHTML = "Name: " + firstName + " " + lastName + "<br>Age: " + age;
    if (firstName.length > 5 || lastName.length > 5){
        details.style.color = "green";
    }
    else {
        details.style.color = "red";
    }
}

document.getElementById("btn").addEventListener("click",showDetails);

