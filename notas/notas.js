
// ARRAYS

// arrays : [0,1,2,3] siempre arranca de la posicion 0

// ej frutas : [manzana, banana, pera] 0=manzana

// log(frutas[2]) = pera

// arrays asociativo

// let pc = {nombre : alta pc, peso: 36g, altura : 1m}

// log(pc[peso]) : 36g

// /////

// FOR ( se crean variables)

// for (let i=0, i < 6; i++ ) {        1,2,3,4,5.
//     log(1)
// }

// FOR IN

// let animales = [perro,gato,tortuga]

// for (animal in animales) = 0,1,2 (muestra la posicion)

// for (animal of animales) = perro,gato,tortuga (muestra valores)


// FUNCIONES 

// function suma(a,b) {
//     total = a + b
//     return total    
// }

// suma ()

// DOM

// METODOS DE ELEMENTOS:

// document.getElementById() - seleccion un id

// document.getElementsByTagName() - selecciona todos los elementos ej p,a,div (poco recomendable)

// document.querySelector() - devuelve el primer elemento que coincida en el grupo ej (.class) (#id)

// document.querySelectorAll() - devuelve una lista de todos los elementos del grupo

// const card = document.querySelector("card")

// DEFINIR OBTENER Y ELIMINAR LOS VALORES DE ATRIBUTOS

// setAttribute () modifica y crea ej ("pepe","pedro") cambia de pepe a padro

// getAttribute ()


// COMANDOS

// document.createElemente
// innetText
// setAttribute

// append()

// obetencion de MediaElementAudioSourceNode

// textContent - devuelve el textContent
// innerHTML devuelve el contenido de un elemento


















// function saludar() {
//     alert("Welcome " + usuario)
// };
// alert("Bienvendios a The Coffe Store");
// let nombreDeUsuario = prompt("Nombre");
// let apellidoDeUsuario = prompt("Apellido");
// let usuario = (nombreDeUsuario + " " + apellidoDeUsuario);
// saludar();

// const productos = [{
//         id: 1,
//         nombre: "Cafe",
//         precio: 600
//     },
//     {
//         id: 2,
//         nombre: "Torta",
//         precio: 500
//     },
//     {
//         id: 3,
//         nombre: "Cookie",
//         precio: 100
//     }
// ]

// const pedirProducto = () => {

//     let keyProducto = parseInt(prompt("Ingrese el número de producto que quiere:\n1) Cafe \n2) Torta \n3) Cookie "));

//     while (keyProducto <= 0) {
//         keyProducto = parseInt(prompt(usuario + " Ingrese el número de producto que quiere:\n1) Cafe \n2) Torta \n3) Cookie"))
//     };

//     let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));

//     while (cantidad <= 0) {
//         cantidad = parseInt(prompt(usuario + " Ingrese la cantidad que desea comprar:"))
//     };

//     alert("Su total es : $" + (productos.find((p) => p id === keyProducto).precio * cantidad));

// }

// pedirProducto();


// alert("Gracias por comprar con nosotros " + usuario)




















