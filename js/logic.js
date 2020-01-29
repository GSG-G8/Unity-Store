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



// Load from Local Storage 
function loadLocal(keyname){
    let res = localStorage.getItem(keyname);
    return res === null ? [] : JSON.parse(res);
}

if(typeof module !== "undefined"){
    module.exports = {
        addProduct,
        product,
        saveLocal,
        loadLocal,
        removeProduct,
        searchProduct
    }
}

  
