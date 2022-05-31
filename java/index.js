let bienvenida = alert("Bienvendios a The Coffe Store")

let nombreDeUsuario = prompt("Nombre");

let apellidoDeUsuario = prompt("Apellido");

let usuario = (nombreDeUsuario + " " + apellidoDeUsuario)

alert("Welcome" + " " + usuario)

let cantidadDeCafes = prompt(usuario + " " + "¿Cuantos Cafes Queres? Maximo 4 por pedido");

if (cantidadDeCafes == 1) {
    alert("El total es 200$ " + (nombreDeUsuario + "" +apellidoDeUsuario))
} else if (cantidadDeCafes == 2) {
    alert("El total es 400$" + (nombreDeUsuario + apellidoDeUsuario))
} else if (cantidadDeCafes == 3) {
    alert("El total es 600$" + (nombreDeUsuario + apellidoDeUsuario))
} else if (cantidadDeCafes == 4) {
    alert("El total es 800$" + (nombreDeUsuario + apellidoDeUsuario))
}

alert(`Gracias por tu Compra,${usuario}`);