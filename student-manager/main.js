"use strict";

let students = [];

window.onload = function(){
    const stored = localStorage.getItem("students");
    if(stored){
        students=JSON.parse(stored); //lo va a convertir el string al arreglo que necesito
        displayStudents(); //hay que meterlo al arreglootra vez
        updateAverage();
    }

}

//me permite ejecutar una funcion para que en el momento del usuario entre a la pagina, antes de cualquier cosa, se ejecute
//aqui recuperar los objetos del storage y mandarlo al student, sirve para el ciclo de vida de la pagina

function addStudent() {
    const name = document.getElementById("nameInput").value.trim();
    const grade = parseFloat(document.getElementById("gradeInput").value);

    const student={name,grade};
    students.push(student);


    saveToLocalStorage();
    displayStudents();
    updateAverage();

    //pars - convertir un dato a un objeto deseado
    //parsFloat = con decimales
    //parsIn = enteros
}

function displayStudents() {
    
    const list = document.getElementById("studentList");
    list.innerHTML=``;
    for (let i=0; i<students.length; i++){
        const li = document.createElement("li");
        li.innerHTML= `
            <p>${students[i].name} - ${students[i].grade} </p>
        `;
        list.appendChild(li);
    }

}

function updateAverage() {
    if(students.length===0){
        return;
    } 
    let total =0;
    for (let i=0; i<students.length;i++){
        total = total+students[i].grade;
    }
    let average = total/students.length;

    document.getElementById("averageDisplay").textContent = `Average Grade: ${average.toFixed(2)}`;

}

function saveToLocalStorage(){
    console.log(JSON.stringify(students));
    localStorage.setItem("students",JSON.stringify(students));


}