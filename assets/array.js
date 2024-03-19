// Array of students
let students = [
    { name: "Nandu", age: 20, department: "Computer Science", totalMarks: 85 },
    { name: "Mithun", age: 22, department: "Physical Education", totalMarks: 78 },
    { name: "Gokul", age: 21, department: "Mechanical Engineering", totalMarks: 92 },
    { name: "Leo", age: 23, department: "Computer Science", totalMarks: 80 },
    { name: "Akhil", age: 20, department: "Computer Science", totalMarks: 75 },
    { name: "Santo", age: 22, department: "Electrical Engineering", totalMarks: 88 },
];

// Function to display students in the table
function displayStudents() {
    let tbody = document.getElementById("student-body");
    tbody.innerHTML = "";
    students.forEach(student => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.department}</td>
            <td>${student.totalMarks}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Function to sort students based on selected field
function sortStudents() {
    let sortField = document.getElementById("sort").value;
    students.sort((a, b) => (a[sortField] > b[sortField]) ? 1 : -1);
    displayStudents();
}

// Function to filter students by total marks greater than given mark
function filterStudents() {
    let filterValue = document.getElementById("filter").value;
    let filteredStudents = students.filter(student => student.totalMarks > filterValue);
    displayFilteredStudents(filteredStudents);
}

// Function to display filtered students
function displayFilteredStudents(filteredStudents) {
    let tbody = document.getElementById("student-body");
    tbody.innerHTML = "";
    filteredStudents.forEach(student => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.department}</td>
            <td>${student.totalMarks}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Function to implement wild search for the table
function searchStudents() {
    let searchText = document.getElementById("search").value.toLowerCase();
    let filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchText)
    );
    displayFilteredStudents(filteredStudents);
}

// Initial display of students
displayStudents();
