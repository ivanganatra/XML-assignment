function toogleProductList(){
    let table=document.getElementById("table");
    if (table.style.display === "none") {
        table.style.display = "block";
      } else {
        table.style.display = "none";
      }
}