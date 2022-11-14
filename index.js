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
    let table=document.getElementById("newTable");
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
    location.href="addproduct.html";
    console.log(form);
}

//SortTable
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("newTable");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length- 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switchcount ++;
        switching = true;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
    console.log("Done switching");
  }