var estudiantes = ["Karen", "Fernanda", "Sneyder", "Rodríguez"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++){
   saludarEstudiantes(estudiantes[i]);
}

// Diferente procedimiento 

var estudiantes = ["Karen", "Fernanda", "Sneyder", "Rodríguez"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//loops while

var estudiantes = ["Karen", "Fernanda", "Sneyder", "Rodríguez"];


function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

// otra forma 

var estudiantes = ["Karen", "Fernanda", "Sneyder", "Rodríguez"];


function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}