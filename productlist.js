const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");

const url = `https://kea-alt-del.dk/t7/api/products?limit=50&brandname=${brandname}`;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

document.querySelector(".productList h2").textContent = `${brandname}`;

function showProduct(product) {
  const template = document.querySelector("#smallProductTemplate").content;

  const copy = template.cloneNode(true);

  copy.querySelector(
    ".dettagliprodotto"
  ).textContent = `${product.articletype} / ${product.brandname}`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = `${product.price} DKK`;
  copy.querySelector(
    ".smallProduct img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector(".readmore").href = `product.html?id=${product.id}`;

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p").textContent = "DISCOUNT";
  }

  const parent = document.querySelector("main");
  parent.appendChild(copy);
}
