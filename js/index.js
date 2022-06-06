function suma(num1, num2) {
    let total = num1 + num2;
    return totalFinal
}

function multiplicar(num1, num2) {
    let total = num1 * num2;
    return total
}

function saludar() {
    alert("Welcome " + usuario)
};

alert("Bienvendios a The Coffe Store");

let nombreDeUsuario = prompt("Nombre");

let apellidoDeUsuario = prompt("Apellido");

let usuario = (nombreDeUsuario + " " + apellidoDeUsuario);

saludar();

// cafe

const cafe = 400;

let cantidadCafe = parseInt(prompt(usuario + " ¿Cuantos Cafes Queres?"));

let total = multiplicar(cantidadCafe, cafe);

alert("El total es "+ total)

// extra

const torta = 300
const budin = 200
const cookie = 100

let extra = prompt(usuario + " ¿Quieres sumarle un extra? Hay torta, budin y cookie?");

if (extra === "no") {
    alert("El total es " + total)    
}
else if (extra === "torta") {
    alert("el total es " + (total + torta))
}
else if (extra === "budin") {
    alert("el total es " + (total + budin))
}
else if (extra === "cookie") {
    alert("el total es " + (total + cookie))
}
else {alert("El total es " + total)}

alert ("Gracias por comprar con nosotros")