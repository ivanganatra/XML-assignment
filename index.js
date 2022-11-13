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