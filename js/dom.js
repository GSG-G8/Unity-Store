let products = loadLocal("products");

let addFormButton = document.querySelector(".submit");
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// StART THE ADD FORM
addFormButton.onclick = function() {
  const titleInput = document.querySelector(".title");
  const priceInput = document.querySelector(".price");
  const detailsInput = document.querySelector(".details");
  const imageInput = document.querySelector(".image");
  const categoryInputValue = document.querySelector("#my-category").value;

  if (
    titleInput.value === "" ||
    priceInput.value === "" ||
    detailsInput.value === "" ||
    imageInput.value === ""
  ) {
    alert("palaskdjasd");
  } else {
    let next_id = localStorage.getItem("next_id");
    let a = product(
      next_id++,
      titleInput.value,
      detailsInput.value,
      priceInput.value,
      categoryInputValue,
      imageInput.value
    );
    console.log(a);
    next_id = localStorage.setItem("next_id", next_id++);
    products = addProduct(products, a);
    console.log(products);
    saveLocal("products", products);
  }
};

//Start display products

searchInput.onkeyup = function() {
  let results = searchProduct(products, searchInput.value);
  renderProduct(results);
};

function renderProduct(products) {
  let containerProducts = document.querySelector(".seller-product");
  containerProducts.innerHTML = "";

  products.forEach(product => {
    let remove = document.createElement("div");
    remove.innerHTML = "<span>Delete Product</span>";
    remove.proid = product.id;
    remove.onclick = removeThis;

    let article = document.createElement("div");
    article.classList.add("seller-product__container-products");
    article.innerHTML = `

            
                <img src = "${product.image}">
                <h3>${product.category}</h3>
                <h2>${product.title}</h2>
                <h4>${product.price}</h4>
                <p>${product.details}</p>
            
        `;
    containerProducts.appendChild(article);
    article.appendChild(remove);
  });
}

function renderProductBuyer(products) {
  let buyerProducts = document.querySelector(".buyer-view-products");
  buyerProducts.innerHTML = "";

  products.forEach(product => {
    let article = document.createElement("div");
    article.classList.add("seller-product__container-products");
    article.innerHTML = `

            
                <img src = "${product.image}">
                <h3>${product.category}</h3>
                <h2>${product.title}</h2>
                <h4>${product.price}</h4>
                <p>${product.details}</p>
            
        `;
    buyerProducts.appendChild(article);
  });
}
renderProduct(products);
// this function to apply remove function and save to local and then renders products
function removeThis() {
  products = removeProduct(products, this.proid);
  saveLocal("products", products);
  renderProduct(products);
}
