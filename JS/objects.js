var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2022
};
// ejemplos de traer solo un elemento especifico marca,modelo o año
miAuto.marca
"Toyota"
miAuto.annio
2022

// otro ejemplo pero con una funcion
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2022,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

// objects funciones constructora

function auto(marca, modelo, annio) {
     this.marca = marca;
     this.modelo = modelo;
     this.annio = annio;
}
var autoNuevo = new auto("Tesla", "Model 3", 2022);

var autoNuevo2 = new auto("Tesla", "Model X", 2021);

var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

// Reto

var marca = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",	
   "Cadillac",
    "Caterham",
    "Chevrolet",
    "Citroen",
    "Dacia",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar"   	 	 
]

var modelo = [
    "C-Max",
    "Fiesta",
    "Focus",
    "Mondeo",
    "Ka",
    "S-MA",
   " B-MAX",
    "Grand C-Max",
    "Tourneo Custom",
    "Kuga",
    "Galaxy",
    "Grand Tourneo Connect",
    "Tourneo Connect",
    "EcoSport",
    "Tourneo Courier",
    "Mustang",
    "Transit Connect",
    "Edge",
    "Ka+"
]

var annio = [
    "1988",
    "1989",
    "1978",
    "1989",
    "1928",
    "1989",
    "1968",
    "1989",
    "1888",
    "1989",
    "1288",
    "1989",
    "1938",
    "1989",
    "1988",
    "1999",
    "1983",
    "1989",
    "1918"
]

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for(var i = 0; marca.length > i && modelo.length > i && annio.length > i; i++);{

var nuevoAuto = new auto(modelo[i], marca[i], annio[i]);
  console.log(nuevoAuto);
}