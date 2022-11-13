//Loading XML Document
function loadXMLDoc(filename) {
    if (window.ActiveXObject) {
        xhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } else {
        xhttp = new XMLHttpRequest();
    }
    xhttp.open("GET", filename, false);
    xhttp.send("");
    return xhttp.responseXML;
}
function displayResult() {
    xml = loadXMLDoc("index.xml");
    xsl = loadXMLDoc("index.xsl");
    if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        ex = xml.transformNode(xsl);
        document.getElementById("example").innerHTML = ex;
    } else {
        xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xsl);
        resultDocument = xsltProcessor.transformToFragment(xml, document);
        console.log(resultDocument);
        document.getElementById("table").appendChild(resultDocument);
    }
}

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