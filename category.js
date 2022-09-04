fetch("https://kea-alt-del.dk/t7/api/brands")
  .then((res) => res.json())
  .then(goThroughEach);

function goThroughEach(data) {
  console.log(data);
  data.forEach(showBrand);
}

function showBrand(oneBrand) {
  const firstLetter = oneBrand.brandname.charAt(0).toLowerCase();

  console.log(oneBrand);
  const templateElement = document.querySelector("#categoryTemplate").content;
  const myClone = templateElement.cloneNode(true);

  myClone.querySelector("a").textContent = oneBrand.brandname;
  myClone.querySelector(
    "a"
  ).href = `productlist.html?brandname=${oneBrand.brandname}`;

  const parentElement = document.querySelector(`#lettersection_${firstLetter}`);
  if (parentElement) {
    parentElement.appendChild(myClone);
  }
}
