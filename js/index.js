const cont = document.querySelector("#cont");

for (let prod of productos) {
  cont.innerHTML += `
      <div class="col-sm-3">
          <div class="card bg-dark text-light m-1">
          <img class="card-img-top" src="${prod.img}" alt="">
          <div class="card-body">
          <h5 class="card-title">${prod.nombre}</h5>
           <p class="card-text">$ ${prod.precio}</p>
           <a class="btn shadow destacado aCarrito" id=${prod.nombre}>COMPRAR</a>
      </div>
      </div>
      </div>
  `
}


//CARRITO

const cart = []

const aCarrito = document.getElementsByClassName(`aCarrito`)


for (let p of aCarrito) {

  p.addEventListener('click', (e) => {

    const carritoid = e.target.id;

    findAndAddProd(carritoid);

    renderCart();

  });
}


function findAndAddProd(id) {

const produ = productos.find ( produ => {
  return produ.nombre === id;
})

cart.push(produ)

console.log(cart);

}

const detalleDeCompra = document.getElementById('detalleDeCompra')

function renderCart() {

  detalleDeCompra.innerHTML = '';

  for (let item of cart) {

  const cardCarrito = document.createElement('div');

  cardCarrito.classList.add('col-12');

  cardCarrito.innerHTML = `
  <div class="col-sm-3">
      <div class="card bg-dark text-light m-1" style="width: 5rem;">
      <img class="card-img-top" src="${item.img}" alt="">
      <div class="card-body">
       <p class="card-text">$ ${item.precio}</p>
  </div>
  </div>
  </div>
  `

  detalleDeCompra.appendChild(cardCarrito)

}}
