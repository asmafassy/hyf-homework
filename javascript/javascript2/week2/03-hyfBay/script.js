console.log(5);

console.log("Script loaded");

let products = getAvailableProducts();
let filteredProducts = [];

const ul = document.querySelector("#searchResult");

function getRow(title, price, rate) {
  return `<li>
        <h2> ${title} </h2>
        <span> price ${price} </span> <br/>
        <span> rating ${rate} </span>
    </li>`;
}

function filterProducts(text) {
  filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(text.toLowerCase())
  );
  renderProducts();
}

function renderProducts() {
  let rows = "";
  for (let i = 0; i < filteredProducts.length; i++) {
    let product = filteredProducts[i];
    rows += getRow(product.name, product.price, product.rating);
  }
  ul.innerHTML = rows;
}

document.getElementById("search").addEventListener("keyup", (event) => {
  filterProducts(event.target.value);
});

//Filter products based on max price
function filterPrice(num) {
  filteredProducts = products.filter((product) => product.price < num);
  renderProducts();
}

document.getElementById("search2").addEventListener("keyup", (event) => {
  console.log(event.target.value);

  filterPrice(event.target.value);
});
