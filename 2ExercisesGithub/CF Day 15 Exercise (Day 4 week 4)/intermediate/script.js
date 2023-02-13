const employes = `[
    {
        "id": 1,
        "firstName": "Ryan",
        "lastName": "Smith",
        "email": "r.smith@mail.com",
        "jobTitle": "IT Manager",
        "salary": 75000
    },
    {
        "id": 2,
        "firstName": "Sarah",
        "lastName": "Jones",
        "email": "s.jones@mail.com",
        "jobTitle": "Software Engineer",
        "salary": 65000
    },
    {
        "id": 3,
        "firstName": "John",
        "lastName": "Doe",
        "email": "j.doe@mail.com",
        "jobTitle": "Project Manager",
        "salary": 85000
    },
    {
        "id": 4,
        "firstName": "Mark",
        "lastName": "Wilson",
        "email": "m.wilson@mail.com",
        "jobTitle": "Product Manager",
        "salary": 70000
    },
    {
        "id": 5,
        "firstName": "Jane",
        "lastName": "Williams",
        "email": "j.williams@mail.com",
        "jobTitle": "UX Designer",
        "salary": 60000
    },
    {
        "id": 6,
        "firstName": "Joe",
        "lastName": "Brown",
        "email": "j.brown@mail.com",
        "jobTitle": "Sales Manager",
        "salary": 80000
    },
    {
        "id": 7,
        "firstName": "Maria",
        "lastName": "Garcia",
        "email": "m.garcia@mail.com",
        "jobTitle": "Accountant",
        "salary": 55000
    },
    {
        "id": 8,
        "firstName": "Steve",
        "lastName": "Davis",
        "email": "s.davis@mail.com",
        "jobTitle": "Web Developer",
        "salary": 70000
    },
    {
        "id": 9,
        "firstName": "Chris",
        "lastName": "Miller",
        "email": "c.miller@mail.com",
        "jobTitle": "Marketing Manager",
        "salary": 75000
    },
    {
        "id": 10,
        "firstName": "Jennifer",
        "lastName": "Taylor",
        "email": "j.taylor@mail.com",
        "jobTitle": "HR Manager",
        "salary": 65000
    }
]`
//console.log(employes)
let employesList =JSON.parse(employes)
console.log(employesList)
function showJSONContent() {
    employesList.forEach(function(employee) {
        console.log(`ID: ${employee.id}, Name: ${employee.firstName} ${employee.lastName}, Email: ${employee.email}, Job Title: ${employee.jobTitle}, Salary: ${employee.salary}`);
        document.getElementById("result2").innerHTML += `ID: ${employee.id}, Name: ${employee.firstName} ${employee.lastName}, Email: ${employee.email}, Job Title: ${employee.jobTitle}, Salary: ${employee.salary}`
    });
}

showJSONContent();
