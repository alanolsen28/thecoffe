const cont = document.querySelector("#cont");

for(let p of productos){
  cont.innerHTML += `
      <div class="col-sm-3">
          <div class="card bg-dark text-light m-1">
          <img class="card-img-top" src="${p.img}" alt="">
          <div class="card-body">
          <h5 class="card-title">"${p.nombre}"</h5>
           <p class="card-text">"${p.precio}"</p>
           <button class="btn btn-lg shadow destacado" type="submit"
           style="background-color:#998774;">COMPRAR</button>
      </div>
  `
}


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




























// let showProductsCart = document.getElementById("showProductsCart")
// let showCart = document.getElementById("showCart")
// let row = document.getElementById("row")
// let col = document.getElementById("col")
// let card = document.getElementById("card")
// let cardBody = document.getElementById("card-body")


// let cart = []

// function mostrarProductos() {
//     productos.forEach((product) => {
//          let card = document.createElement(div)
//          card.innerHTML += ''










         
//     }

//     buyButton.addEventListener("click", function() {
//         cart.push(product)
//         alert("Agregaste " + product.name + " al carrito")
//         div.innerHTML
//         showCart( )
//     })
// }


//boton de agregar a carrito





{/* <section id="showProductsCart">
<div class="container-xl text-center" id="showCart">
  <div id="row"> 
    <div id="col">
      <div id="card">
        <div id="card-body">
        </div>
      </div>
    </div>
  </div>



<div class="row m-1">
          <div class="col-sm-3">
            <div class="card bg-dark text-light m-1" style="width: 18rem;" >
              <img src="../imagenes/imagenes_menu/1.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Espresso</h5>
                <p class="card-text">500</p>
                <a href="#" class="btn btn-primary">COMPRAR</a>
              </div>
            </div>
          </div> */}
