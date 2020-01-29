let products = loadLocal('products');
const addFormButton = document.querySelector('.submit-button')

addFormButton.onclick = function() {
    const titleInput = document.querySelector('.title');
    const priceInput = document.querySelector('.price');
    const detailsInput = document.querySelector('.details');
    const imageInput = document.querySelector('.image');
    const categoryInputValue = document.querySelector('#my-category').value;

    if (titleInput.value === "" || priceInput.value === "" || detailsInput.value === "" || imageInput.value === "") {
        alert("palaskdjasd");
    } else {
         let next_id= localStorage.getItem("next_id");
        let a = new product(next_id++, titleInput.value, detailsInput.value, priceInput.value, categoryInputValue, imageInput.value)
        console.log(a);
        next_id= localStorage.setItem("next_id", next_id++);
        products = addProduct(products, a)
        saveLocal("products", products);
    }
}

// represents a product
let product = function(id, title, details, price, category, image) {
    return {id, title, details, price, category, image}
}



// Add single product object into main array (tested)
function addProduct(arr, obj) {
    return [...arr, obj];
}

// this function to remove a single product
function removeProduct(arr, id) {
    return arr.filter(pro=> pro.id!=id);
}



// this function to apply remove function and save to local and then renders products
function removeThis()  {
    products = removeProduct(products, this.proid);
    saveLocal("products" ,products)
    renderProduct(products);            
}



// Save To Local Storage 
function saveLocal(keyName, storArr) {
    localStorage.setItem(keyName, JSON.stringify(storArr))
}


// search and filter product 
let searchInput = document.querySelector('.search')
function searchProduct(products, text) {
    return products.filter(pro=> pro.title.includes(text));
    
}

searchInput.onkeyup = function(){
    let results = searchProduct(products, searchInput.value)
    renderProduct(results);
}

// Load from Local Storage 
function loadLocal(keyname){
    let res = localStorage.getItem(keyname);
    return res === null ? [] : JSON.parse(res);
}

function renderProduct(products) {
    let containerProducts = document.querySelector('.seller-product');
    containerProducts.innerHTML = '';
    
    products.forEach(product => {
        let remove = document.createElement('span');
        remove.innerHTML= "<span>X</span>";
        remove.proid = product.id;
        remove.onclick = removeThis;


        let article = document.createElement('div');
        article.classList.add('seller-product__container-products');
        article.innerHTML = `

            
                <img src = "${product.image}">
                <h3>${product.category}</h3>
                <h2>${product.title}</h2>
                <h4>${product.price}</h4>
                <p>${product.details}</p>
            
        `;
        containerProducts.appendChild(article);
        containerProducts.appendChild(remove);

    } )
        
    }

function renderProductBuyer(products) {
    let buyerProducts = document.querySelector('.buyer-view-products');
    buyerProducts.innerHTML = '';
    
    products.forEach(product => {
        let article = document.createElement('div');
        article.classList.add('seller-product__container-products');
        article.innerHTML = `

            
                <img src = "${product.image}">
                <h3>${product.category}</h3>
                <h2>${product.title}</h2>
                <h4>${product.price}</h4>
                <p>${product.details}</p>
            
        `;
        buyerProducts.appendChild(article);

    } )
        
    }
    renderProduct(products);

if(typeof exports !== "undefined"){
    module.exports = {
        addProduct,
        products
    }
}

  
