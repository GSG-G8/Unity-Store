// represents a product
let product = function(id, title, details, price, category, image) {
    return {id, title, details, price, category, image}
}


// Add single product object into main array (tested)
function addProduct(arr, obj) {
    return [...arr, obj];
}

// Save To Local Storage 
function saveLocal(keyName, storArr) {
    localStorage.setItem(keyName, JSON.stringify(storArr))
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
        loadLocal
    }
}

  
