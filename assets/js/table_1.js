var products = [];
var caItems = [];
var cart_n = document.getElementById("cart_n");

fetch("http://localhost:3000/api/italok")
  .then((res) => res.json())
  .then((json) => {
    json.map((data) => {
      italDIV.append(italdiv_fun(data));
    });
  });

fetch("http://localhost:3000/api/kavek")
  .then((res) => res.json())
  .then((json) => {
    json.map((data) => {
      kaveDIV.append(kavediv_fun(data));
    });
  });

fetch("http://localhost:3000/api/sutemenyek")
  .then((res) => res.json())
  .then((json) => {
    json.map((data) => {
      sutiDIV.append(sutidiv_fun(data));
    });
  });

function italdiv_fun({ name, kiszereles, price, con }) {
  let div = document.createElement("div");
  let btn = `btnFruit${con}`;
  div.className = "col-lg-3";
  div.innerHTML = `

        <div style="text-align:center;border-radius:15px;background-color:rgb(231, 220, 207)" class="card mb-3 shadow-lg">
  
  <div class="card-body text-dark" style="padding:0px">
    <img src="/img/menu2.jpg" class="card-img-top" style="padding-bottom:10px">
    <h5 style="font-weight:bold" class="card-title">${name}</h5>
    <h6 class="card-subtitle text-muted"></h6>
  </div>
  <div class="card-body">
    <p class="card-text">Kiszerelés: ${kiszereles}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style="background-color:rgb(231, 220, 207)">Egységár: ${price} Ft</li>
  </ul>
  <div class="card-footer text-muted" style="background-color:rgb(231, 220, 207)">
    <div class="d-flex justify-content-center align-items-center">

<div class="btn-group " style="margin-top:10px;margin-bottom:10px;">
    <button id="${btn}" type="button" onclick="cart('${name}','${price}','${con}','${btn}')"
    class="btn btn-sm btn-outline-secondary">Kosárba</button>
</div>

        </div>
  </div>
</div>

             
        `;
  return div;
}

function kavediv_fun({ name, kiszereles, price, con }) {
  let div = document.createElement("div");
  let btn = `btnFruit${con}`;
  div.className = "col-lg-3";
  div.innerHTML = `

        <div style="text-align:center;border-radius:15px;background-color:bisque" class="card mb-3 shadow-lg">
  
  <div class="card-body text-dark" style="padding:0px">
    <img src="/img/menu1.jpg" class="card-img-top" style="padding-bottom:10px">
    <h5 style="font-weight:bold" class="card-title">${name}</h5>
    <h6 class="card-subtitle text-muted"></h6>
  </div>
  <div class="card-body">
    <p class="card-text">Kiszerelés: ${kiszereles}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style="background-color:bisque">Egységár: ${price} Ft</li>
  </ul>
  <div class="card-footer text-muted" style="background-color:bisque">
    <div class="d-flex justify-content-center align-items-center">

<div class="btn-group " style="margin-top:10px;margin-bottom:10px;">
    <button id="${btn}" type="button" onclick="cart('${name}','${price}','${con}','${btn}')"
    class="btn btn-sm btn-outline-secondary">Kosárba</button>
</div>

        </div>
  </div>
</div>

             
        `;
  return div;
}

function sutidiv_fun({ name, kiszereles, price, con }) {
  let div = document.createElement("div");
  let btn = `btnFruit${con}`;
  div.className = "col-lg-3";
  div.innerHTML = `

        <div style="text-align:center;border-radius:15px;background-color:bisque" class="card mb-3 shadow-lg">
  
  <div class="card-body text-dark" style="padding:0px">
    <img src="/img/menu3.jpg" class="card-img-top" style="padding-bottom:10px">
    <h5 style="font-weight:bold" class="card-title">${name}</h5>
    <h6 class="card-subtitle text-muted"></h6>
  </div>
  <div class="card-body">
    <p class="card-text">Kiszerelés: ${kiszereles}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style="background-color:bisque">Egységár: ${price} Ft</li>
  </ul>
  <div class="card-footer text-muted" style="background-color:bisque">
    <div class="d-flex justify-content-center align-items-center">

<div class="btn-group " style="margin-top:10px;margin-bottom:10px;">
    <button id="${btn}" type="button" onclick="cart('${name}','${price}','${con}','${btn}')"
    class="btn btn-sm btn-outline-secondary">Kosárba</button>
</div>

        </div>
  </div>
</div>

             
        `;
  return div;
}

function cart(name, price) {
  var item = {
    id: Math.random(),
    table: "1.asztal",
    name: name,
    price: price,
  };

  caItems.push(item);
  let storage = JSON.parse(localStorage.getItem("cart"));

  if (storage == null) {
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  } else {
    products = JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart", JSON.stringify(products));
  }

  products = JSON.parse(localStorage.getItem("cart"));
  cart_n.innerHTML = `[${products.length}]`;

  alert("Termék a kosárhoz adva!");
}
