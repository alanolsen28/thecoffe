class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre
        this.precio = precio

    }

    mostrarProducto() {
        return this.nombre;
    }
}

const producto1 = new Producto("cafe", 500);
const producto2 = new Producto("torta", 200);
const producto3 = new Producto("cookie", 100);

////

class DetallePedido {
    constructor(producto, cantidad) {
        this.producto = producto
        this.cantidad = cantidad
    }
    calcularSubtotal() {
        let subtotal = this.producto.precio * this.cantidad
        return subtotal;
    }
    mostrarDetalle() {
        return " " + this.cantidad + "x" + this.producto.mostrarProducto()
    }

}

const detallePedido1 = new DetallePedido(producto1, 2);
const detallePedido2 = new DetallePedido(producto2, 1);
const detallePedido3 = new DetallePedido(producto3, 3);

//////

class Pedido {
    constructor(detalles) {
        this.detalles = detalles;
    }
    calcularTotal() {
        let total = 0
        for (const dp of this.detalles) {
            total = total + dp.calcularSubtotal();
        }
        return total
    }
    mostrarPedido() {
        let ticket = ""
        for (const dp of this.detalles) {
            ticket = ticket + dp.mostrarDetalle() + " ";
        }
        ticket += this.calcularTotal()
        return ticket;

    }
}
const lista = []
lista.push(detallePedido1);
lista.push(detallePedido2);
lista.push(detallePedido3);

const pedido1 = new Pedido(lista);

console.log(pedido1.mostrarPedido());


/////////////////////////////////////////////////////////////////
// DESAFIO 1 / 2

// function multiplicar(num1, num2) {
//     let total = num1 * num2;
//     return total
// }

// function saludar() {
//     alert("Welcome " + usuario)
// };

// alert("Bienvendios a The Coffe Store");

// let nombreDeUsuario = prompt("Nombre");

// let apellidoDeUsuario = prompt("Apellido");

// let usuario = (nombreDeUsuario + " " + apellidoDeUsuario);

// saludar();

// // cafe

// const cafe = 400;

// let cantidadCafe = parseInt(prompt(usuario + " ¿Cuantos Cafes Queres?"));

// while (cantidadCafe <= 0) {
//     cantidadCafe = parseInt(prompt(usuario + " ¿Cuantos Cafes Queres?"))
// };

// let total = multiplicar(cantidadCafe, cafe);

// alert("El total es " + total)

// // extra

// const torta = 300
// const budin = 200
// const cookie = 100

// let extra = prompt(usuario + " ¿Quieres sumarle un extra? Hay torta, budin y cookie?");


// while (extra != "no" && extra != "torta" && extra != "budin" && extra != "cookie") {
//     extra = prompt("Opcion equivocada " + usuario + " ¿Quieres sumarle un extra? Hay torta, budin y cookie?");
// }

// if (extra === "no") {
//     alert("El total es " + total)
// } else if (extra === "torta") {
//     alert("el total es " + (total + torta))
// } else if (extra === "budin") {
//     alert("el total es " + (total + budin))
// } else if (extra === "cookie") {
//     alert("el total es " + (total + cookie))
// } else {
//     alert("El total es " + total)
// }


// alert("Gracias por comprar con nosotros")