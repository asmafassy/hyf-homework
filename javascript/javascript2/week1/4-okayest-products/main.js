console.log("Script loaded");

const products = getAvailableProducts();
const ul = document.querySelector("ul");
console.log(ul)
console.log(products);

function getRow(title, price, rate) {
  return`<li>
        <h2> ${title} </h2>
        <span> price ${price} </span> <br/>
        <span> rating ${rate} </span>
    </li>`;
}
console.log(main);

function renderProducts() {
  let rows = "";
  for (let i = 0; i < products.length; i++) {
      let product = products[i]
   rows += getRow(product.name, product.price, product.rating);
  }
  console.log(rows)
  ul.innerHTML = rows
}
renderProducts();

