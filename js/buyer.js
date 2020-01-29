
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
    renderProductBuyer(products);

    