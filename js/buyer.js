
let cart = [];

let products = loadLocal('products');
// Load from Local Storage 
function loadLocal(keyname){
    let res = localStorage.getItem(keyname);
    return res === null ? [] : JSON.parse(res);
}
console.log(products);
function renderProductBuyer(products) {
    let buyerProducts = document.querySelector('.seller-product');
    buyerProducts.innerHTML = '';
    let btn;
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
        btn = document.createElement('button');
            btn.classList.add("edit-button", "resize-button");
            btn.innerHTML = "Add To Cart";
            btn.product_id = product.id;
            console.log(btn.product_id);
            btn.addEventListener("click", function() {
               // let product = function(id, title, details, price, category, image) 
               let b = new changeToObject(product.id, product.title, product.price, product.category, product.image)
               //console.log(b);
               cart = addProduct(cart, b);
               //console.log(cart);
               saveLocal("cart" ,cart);
                //addThisToCart(this);

            });
        article.appendChild(btn);
        buyerProducts.appendChild(article);

    } )
        
    }
    renderProductBuyer(products);


    // Save To Local Storage 
    function saveLocal(keyName, storArr) {
    localStorage.setItem(keyName, JSON.stringify(storArr))
    }
  
    let changeToObject = function(id, title, details, price, category, image) {
        return {id, title, details, price, category, image}
    }
    
    function addProduct(arr, obj) {
            return [...arr, obj];
    }
