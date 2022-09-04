const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  const templateElement = document.querySelector("#productTemplate").content;
  const myClone = templateElement.cloneNode(true);
  console.log(product);

  myClone.querySelector(
    ".productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  myClone.querySelector(
    ".modelname"
  ).textContent = `${product.productdisplayname}`;
  myClone.querySelector(".brand").textContent = `${product.brandname}`;
  myClone.querySelector(".price").textContent = `${product.price} DKK`;

  const parent = document.querySelector(".product");
  parent.appendChild(myClone);
}
