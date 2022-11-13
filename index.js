// Show Product
let store=document.getElementById("showProduct");
store.addEventListener("click", toogleProductList);
function toogleProductList(){
    console.log("Toogle Product List");
    let table=document.getElementById("table");
    if (table.style.display === "none") {
        table.style.display = "block";
      } else {
        table.style.display = "none";
      }
}

// Add Product
let addProduct=document.getElementById("addProduct");
addProduct.addEventListener("click", newPage);
function newPage(){
    console.log("GoTo new Page");
    let table=document.getElementById("addp");
    if (table.style.display === "none") {
        table.style.display = "block";
      } else {
        table.style.display = "none";
      }
}