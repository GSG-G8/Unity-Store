// represents a product
let product = function(id, title, details, price, category, image) {
  return { id, title, details, price, category, image };
};

// Add single product object into main array (tested)
function addProduct(arr, obj) {
  return [...arr, obj];
}

// this function to remove a single product
function removeProduct(arr, id) {
  console.log(arr.filter(pro => pro.id != id));
  return arr.filter(pro => pro.id != id);
}

// Save To Local Storage
function saveLocal(keyName, storArr) {
  localStorage.setItem(keyName, JSON.stringify(storArr));
}

// search and filter product
let searchInput = document.querySelector(".search");
function searchProduct(products, text) {
  if (text !== "") {
    const regex = new RegExp(text, "i");
    return products.filter(pro => pro.title.match(regex));
  }
  return products;
}

// Load from Local Storage
function loadLocal(keyname) {
  let res = localStorage.getItem(keyname);
  return res === null ? [] : JSON.parse(res);
}

if (typeof exports !== "undefined") {
  module.exports = {
    addProduct,
    product,
    removeProduct,
    searchProduct
  };
}
