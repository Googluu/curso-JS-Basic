var numero = 1;

switch (numero) {
     case 1: 
          console.log("Soy uno!");
          break; // break es para que se muestre el resultado que se esta llamando y no se muestre todo!
     case 10:
         console.log("Soy un diez!");
         break;
         case 100:
         console.log("Soy un 100!");
         break;
      default: // default es cuando el resultado no existe en los casos 
          console.log("No soy nada");   
}

var Jugador;
var Anonymo;

switch (Jugador && Anonymo) {
    case Jugador == "tijeras" && Anonymo == "papel": 
    console.log("Ganaste");
    break;
}
switch (Jugador && Anonymo) {
    case Jugador == "piedra" && Anonymo == "tijeras":
        console.log("Ganaste");
        break;
}
switch (Jugador && Anonymo) {
    case Jugador == "papel" && Anonymo == "piedra":
        console.log("Ganaste");
        break;
}
switch (Jugador && Anonymo) {
    case Jugador == Anonymo:
        console.log("Empate");
        default:
            console.log("Perdiste");
}
    
