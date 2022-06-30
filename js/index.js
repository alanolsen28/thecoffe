const cont = document.querySelector("#cont");

const detalleDeCompra = document.getElementById('detalleDeCompra')

for (let prod of productos) {
  cont.innerHTML += `
      <div class="col-sm-3">
          <div class="card bg-dark text-light m-1">
          <img class="card-img-top" src="${prod.img}" alt="">
          <div class="card-body">
          <h5 class="card-title">${prod.nombre}</h5>
           <p class="card-text">$${prod.precio }</p>
           <a class="btn shadow destacado aCarrito" id=${prod.nombre}>COMPRAR</a>
      </div>
      </div>
      </div>
  `
}

//CARRITO

let cart = []

const aCarrito = document.getElementsByClassName(`aCarrito`)

const totalPP = document.getElementById(`total`)

for (let p of aCarrito) {

  p.addEventListener('click', (e) => {

    const carritoid = e.target.id;

    findAndAddProd(carritoid);

    renderCart();

    const total = cart.map((item) => item.precio).reduce((valor1, valor2) => valor1 + valor2, 0)

    totalPP.innerText = `EL TOTAL ES: $${total}`;

    localStorage.setItem("carrito", JSON.stringify(cart));

  });
}

const buttonDeleteCart = document.getElementById(`buttonDeleteCart`)



buttonDeleteCart.onclick = () => {
  cart.length == 0;
  console.log(cart)
}

// LOCAL STORAGE

const storage = JSON.parse(localStorage.getItem("carrito"))

storage ? cart = storage : cart = [];

for (let f of storage) {

  const cardCarrito = document.createElement('div');

  cardCarrito.innerHTML += `
<div class="col-sm-3">
    <div class="card bg-light text-dark m-1" style="width: 5rem;">
    <img class="card-img-top" src="${f.img}" alt="">
    <div class="card-body">
     <p class="card-text">$ ${f.precio}</p>
</div>
</div>
</div>
`

  const total = cart.map((item) => item.precio).reduce((valor1, valor2) => valor1 + valor2, 0)
  totalPP.innerText = `EL TOTAL ES: $${total}`;

  detalleDeCompra.appendChild(cardCarrito)

}



// FUNCIONES DEL CART

function findAndAddProd(id) {

  const produ = productos.find(produ => {
    return produ.nombre === id;
  })

  cart.push(produ)

  console.log(cart);

}

//

function renderCart() {

  detalleDeCompra.innerHTML = '';

  for (let item of cart) {

    const cardCarrito = document.createElement('div');

    cardCarrito.innerHTML += `
  <div class="col-sm-3">
      <div class="card bg-light text-dark m-1" style="width: 5rem;">
      <img class="card-img-top" src="${item.img}" alt="">
      <div class="card-body">
       <p class="card-text">$ ${item.precio}</p>
  </div>
  </div>
  </div>
  `
    detalleDeCompra.appendChild(cardCarrito)

  }
}