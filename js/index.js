const cont = document.querySelector("#cont");

for (let p of productos) {
  cont.innerHTML += `
      <div class="col-sm-3">
          <div class="card bg-dark text-light m-1">
          <img class="card-img-top" src="${p.img}" alt="">
          <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
           <p class="card-text">$ ${p.precio}</p>
           <button onclick="agregar()" class="btn btn-lg shadow destacado agregarCarrito" type="submit"
           style="background-color:#998774;">COMPRAR</button>
      </div>
  `

}

let cart = []

agregar = () => { cart.push(productos) 
  alert("Agregaste " + productos.nombre + " al carrito");}