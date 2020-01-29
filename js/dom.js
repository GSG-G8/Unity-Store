
let products = loadLocal('products');

let addFormButton = document.querySelector('.submit');

// StART THE ADD FORM 

addFormButton.onclick = function() {
    console.log("MOhasd")
    const titleInput = document.querySelector('.title');
    const priceInput = document.querySelector('.price');
    const detailsInput = document.querySelector('.details');
    const imageInput = document.querySelector('.image');
    const categoryInputValue = document.querySelector('#my-category').value;

    if (titleInput.value === "" || priceInput.value === "" || detailsInput.value === "" || imageInput.value === "") {
        alert("palaskdjasd");
    } else {
        let next_id= localStorage.getItem("next_id");
        let a = product(next_id++, titleInput.value, detailsInput.value, priceInput.value, categoryInputValue, imageInput.value)
        console.log(a);
        next_id= localStorage.setItem("next_id", next_id++);
        products = addProduct(products, a)
        console.log(products)
        saveLocal("products", products);
    }
}

// Start render the products
function renderProduct(products) {
  let containerProducts = document.querySelector('.container-products');
  containerProducts.innerHTML = '';
  
  products.forEach(product => {

      let article = document.createElement('article');
      article.innerHTML = `

          <div><img src = "${product.image}"></div>
          <div> <h3>${product.category}</h3> </div>
          <div> <h2>${product.title}</h2> </div>
          <div> <h3>${product.price}</h3> </div>
          <div> <p>${product.details}</p> </div>

      `;
      containerProducts.appendChild(article);
  } )
      
}

renderProduct(products);