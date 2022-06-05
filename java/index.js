function suma(num1, num2) {
    let total = num1 + num2;
    alert("el total es = " + total)
}

function multiplicar(num1, num2) {
    let total = num1 * num2;
    alert("el total es = " + total)
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

let resultado = multiplicar(cantidadCafe, cafe);

// extra

const torta = 300
const budin = 200
const cookie = 100

let extra = prompt(usuario + " ¿Quieres sumarle un extra? Hay torta, budin y cookie?");

if (extra === "torta") {
    alert("el total es " + (multiplicar(extra, torta)))
}
else if (extra === "budin") {
    alert("el total es " + (resultado + budin))
}
else if (extra === "cookie") {
    alert("el total es " + (resultado + cookie))
}
else {alert("El total es" + resultado)}

