var edad = 18;

if(edad === 18) {
    console.log("Puedes votar");
} else if ( edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar tarado");
}

condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";

// Reto 

var Jugador;
var Computadora;

if (Jugador == "Tijeras" &&
    Computadora == "Papel") {
        console.log("Ganastes");
    }
else if (Jugador == "Piedra" && 
    Computadora == "Tijeras") {
        console.log("Ganastes");
    }   
else if (Jugador == "Papel" && 
    Computadora == "Piedra") {
        console.log("Ganastes");
    }
else if (Jugador == Computadora) {
    console.log("Empate");
}
else {
    console.log("Perdiste");
}    
