console.log("test");
let products = [];

// represents a product
let product = function(id, name, details, price, category) {
    return {id, name, details, price, category}
}

console.log(product("1", "qwad", "qwdqq", "50" , "cloth"));


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
    return res === null ? [] : parseInt(res);
}


if(typeof exports !== "undefined"){
    module.exports = {
        addProduct,
        saveLocal
    }
}

  
