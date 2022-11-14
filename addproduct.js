 //Loading XML Document
 let xmlDoc;
window.onload=function() {
   if (window.ActiveXObject) {
       xhttp = new ActiveXObject("Msxml2.XMLHTTP");
   } else {
       xhttp = new XMLHttpRequest();
   }
   xhttp.open("GET", "index.xml", false);
   xhttp.send("");
   xmlDoc=xhttp.responseXML;
}
 //Form
 let form=document.getElementById("form");
 console.log(form);
 form.addEventListener('submit', (event) => {
   event.preventDefault();
   var x=xmlDoc.getElementsByTagName("employee");
   // stop form submission
   alert("Thank You For Submitting the form");
   let productname=form.elements['productname'].value;
   let price=form.elements['productprice'].value;
   let discount=form.elements['productdiscount'].value;
   let supplier=form.elements['productsupplier'].value;
   let delivery=form.elements['productdelivery'].value;
   localStorage.setItem('productname',productname);
   localStorage.setItem('price',price);
   localStorage.setItem('discount',discount);
   localStorage.setItem('supplier',supplier);
   localStorage.setItem('delivery',delivery);
   let tablerow="<tr></tr><td>productname.innerHTML</td><td>price.innerHTML</td><td>discount.innerHTML</td><td>supplier.innerHTML</td><td>delivery.innerHTML</td></tr>";
//    document.getElementById("newTable").innerHTML = list;
//    document.getElementById("newTable").insertAdjacentHTML( 'afterend', str )
//    .append(tablerow);
   console.log(productname,price,discount,supplier,delivery);

});

function countProduct(){
   pcount = xmlDoc.getElementsByTagName("employee").length;
   document.getElementById("product-count").innerHTML = pcount + "products are there in xml";
   let table=document.getElementById("product-count");
    if (table.style.display === "none") {
        table.style.display = "block";
      } else {
        table.style.display = "none";
      }

}