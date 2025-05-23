"use strict";

let students = [];

window.onload = function(){
    const stored = localStorage.getItem("students");
    if(stored){
        students=JSON.parse(stored); //lo va a convertir el string al objeto que necesito (de string - text a objeto)
        displayStudents(); //hay que meterlo al arreglootra vez
        updateAverage();
    }

};

//me permite ejecutar una funcion para que en el momento del usuario entre a la pagina, antes de cualquier cosa, se ejecute
//aqui recuperar los objetos del storage y mandarlo al student, sirve para el ciclo de vida de la pagina


function addStudent() {
    const name = document.getElementById("nameInput").value.trim();
    if(name==="" || name === isNaN || name === undefined){ //que no está definida, es nula
        alert("the name is not valid");
        return; //si cae ahi se salga, ya no continue
    }

    const grade = parseFloat(document.getElementById("gradeInput").value);
    if(grade>100 || grade<0 || grade === undefined){
        alert("the grade is not valid");
        return;
    }
   // const status = ""
   // if(grade < 70){
   //     status = "failed"; 
   // } else {
   //     status = "passed";
   // }

    const student={
        name,
        grade,
        status: grade >=70 ? "passed" : "failed", //es lo mismo que un if = operdor ternario, pero en una sola linea. 
    };
    
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
        const li = document.createElement("li"); //va dentro del ul para crear listas
        li.innerHTML= `
            <p>${students[i].name} - ${students[i].grade} </p>
        `;
        list.appendChild(li); //agrega elementos
    }

}

function updateAverage() {
    if(students.length === 0){
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
    //console.log(JSON.stringify(students));
    localStorage.setItem("students",JSON.stringify(students));
}