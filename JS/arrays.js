var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
console.log(frutas); 

// como agregar o enviar mas elementos/frutas

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa", "Uvas"];

var masFrutas = frutas.push("Uvas");

// pop elimana el ultimo elemento que hay en el array

var ultimo = frutas.pop("Uvas");

// unshift agrega un elemento nuevo pero lo posisiona de primeras al resto

var nuevoLongitud = frutas.unshift("Uvas");

// shift se utiliza para eliminar al primer elemento 

var borrarFruta = frutas.shift("Uvas");

// el indexOf es el numero de cada posision que tiene los elementos/frutas

// indexOf al momento de escoger una fruta el indexOf lo que hace es darme la posision de la fruta si esta en la posision 1 o 2 o 3 etc..

var posicion = frutas.indexOf("Cereza");

// Metodos de recorridos de Arrays

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

// Primer metodo que es el filter que para filtrar cosas que va a validar si algo es verdadero o flaso y lo mete en un arrays y no modifica el arrays original trae los costos de los articulos que se les pide.

var articulosFiltrados = articulos.filter(function(articulo){
      return articulo.costo <= 500
});

// Segundo metodo

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

// El metodo del map nos va ayudar a mapear los elementos del arrays y no modifica el arrays original, trae los nombres de los articulos.

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

// Resumen
// Este ejemplo es imaginando que recibimos una lista de 30 carros diferentes y se nos solicita que se almacene esta información, como estamos aprendiendo a usar js por que es un lenguaje cool y no queremos tipiar todo de manera normal y aburrida, usaremos este lenguaje c: así hacemos un pequeño trabajo de separar todas las marcas, modelos y años respectivamente en distintos arrays para así lograr juntarlos en uno solo usando una función constructiva la cual indicara cada auto ingresado con su marca, modelo y año respectivamente.

var marca = ["Audi", "Subaru", "Lexus", "Porsche", "BMW", "Mazda", "Buick", "Toyota", "Kia", "Honda", "Hyundai", "Volvo", "Mini", "Mercedes-Benz", "Volkswagen", "Ford", "Lincoln", "Scion", "Acura", "Chevrolet", "Nissan", "Infiniti", "GMC", "Cadillac", "Dodge", "Land", "Rover", "Mitsubishi", "Jeep", "Fiat"];
var modelo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var annio = [2020,2019,2018,2020,2020,2020,2018,2018,2020,2020,2020,2018,2018,2020,2020,2019,2020,2020,2019,2019,2020,2020,2019,2019,2019,2020,2019,2019,2018,2020];
var listaAutos = [];
function autoN(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
} 
for (var i = 0; i<30; i++){   
    var autoNuevo = new autoN(marca[i],modelo[i],annio[i]);
    listaAutos.push(autoNuevo);
}

// Luego se nos solicito que filtremos los carros por medio del año actual, ya que deseaban saber la cantidad de autos nuevos ingresados. Gracias a nuestro trabajo esto se podía saber de la siguiente manera:

var autosFiltrados = listaAutos.filter(function(auto){
    return auto.annio === 2020;
});
console.log(autosFiltrados);

// Así logramos obtener una lista con todos los autos del año 2020 c:

// Posterior a eso, se necesitaba obtener una lista urgentemente de las marcas de los 30 autos que acababan de ingresar por razones ajenas que no nos interesan c: Obviando que nosotros ya tenemos esta lista creada xD y queremos usar js para esto, esta tarea es tan sencilla como hacer: 

var marcasRecientes = listaAutos.map(function(auto){
    return auto.marca;
});
console.log(marcasRecientes);

// Así obtenemos nuestra lista de marcas recientemente ingresadas c:

// Más ejemplos de arrays

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

// find(); nos va ayudar a encontrar algo dentro de este articulo.

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

// otro metodo XD

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

// forEach para que solamente nos imprima el nombres o costos de los articulos.

articulos.forEach(function(articulo){
        console.log(articulo.nombre);
});

// otro metodo de nuevo jajaja XD

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
];

//some(); nos va a regresar una validación de verdadero o falsa para articulos que cumplan esa validación.

var articulosBaratos = articulos.some(function(articulo){
     return articulo.costo <= 700;
});

// Eliminar elementos de un array

//otro método que sirve para eliminar un arreglo según su índice es splice.

var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; //eliminar moto

articulos.splice(2, 1); //el primer parámetro especifica el índice del elemento que quiero eliminar, en este caso es moto
//y el segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, en este caso solo uno que es moto
//['carro', 'celular', 'tv', 'libro']

//también con este método se pueden modificar elementos de un arreglo según su índice.

var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; //modificar moto

articulos.splice(2, 1, 'laptop'); /*se aplican los mismo parámetros, pero esta vez se le agrega el valor al que queremos modificar*/
//['carro', 'celular', 'laptop', 'tv', 'libro']