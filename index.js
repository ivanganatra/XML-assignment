let xmlhttp = new XMLHttpRequest();
let xmlDoc;
window.onload = function () {
  xmlhttp.onreadystatechange = function () {
    // Request finished and response
    // is ready and Status is "OK"
    if (this.readyState == 4 && this.status == 200) {
      xmlDoc = this.responseXML;

    }
  }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
  };
  let val=document.getElementById("show-btn");
  val.addEventListener("click",productDetails)
  function productDetails() {
    var i;

    document.getElementById("heading").style.margin = "5% 0 3% 0";

    var table =
      "<tr><th>Product ID</th><th>Product Name</th><th>Price</th><th>Discount</th><th>Supplier</th><th>Delivery</th></tr>";

    var x = xmlDoc.getElementsByTagName("product");
    // Start to fetch the data by using TagName
    for (i = 0; i < x.length; i++) {
      table +=
        "<tr><td>" +
        x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
        "</td><td>$" +
        x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("discount")[0].childNodes[0].nodeValue +
        "%</td><td>" +
        x[i].getElementsByTagName("seller")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("delivery")[0].childNodes[0].nodeValue +
        "</td><td>";
    }

    // Print the xml data in table form
    document.getElementById("product-table").innerHTML = table;
  }

  function addProduct() {
    var pro_name = document.getElementById("proname").value;
    var pro_price = document.getElementById("price").value;
    var pro_discount = document.getElementById("discount").value;
    var pro_seller = document.getElementById("seller").value;
    var pro_delivery = document.getElementById("delivery").value;

    if (
      productFeildValidation(pro_name) &&
      productPriceValidation(pro_price) &&
      productDiscountValidation(pro_discount) &&
      productFeildValidation(pro_seller) &&
      productFeildValidation(pro_delivery)
    ) {
      var n = xmlDoc.getElementsByTagName("product");
      var x = n[n.length - 1];
      var i = parseInt(x.getElementsByTagName("id")[0].childNodes[0].nodeValue);

      var product = xmlDoc.createElement("product");

      var pid = xmlDoc.createElement("id");
      pid.appendChild(xmlDoc.createTextNode(i + 1));

      var pname = xmlDoc.createElement("name");
      pname.appendChild(xmlDoc.createTextNode(pro_name));

      var price = xmlDoc.createElement("price");
      price.appendChild(xmlDoc.createTextNode(pro_price));

      var discount = xmlDoc.createElement("discount");
      discount.appendChild(xmlDoc.createTextNode(pro_discount));

      var seller = xmlDoc.createElement("seller");
      seller.appendChild(xmlDoc.createTextNode(pro_seller));

      var delivery = xmlDoc.createElement("delivery");
      delivery.appendChild(xmlDoc.createTextNode(pro_delivery));

      product.appendChild(pid);
      product.appendChild(pname);
      product.appendChild(price);
      product.appendChild(discount);
      product.appendChild(seller);
      product.appendChild(delivery);
      xmlDoc.documentElement.appendChild(product);
      alert("Product Added!");

      closeForm();

      productDetails();
    } else {
      var warn = document.getElementById("warning");
      if (!productFeildValidation(pro_name)) {
        warn.innerHTML = "*Please enter a Product Name";
      } else {
        if (!productPriceValidation(pro_price)) {
          warn.innerHTML = "*Please enter a correct Product Price";
        } else {
          if (!productDiscountValidation(pro_discount)) {
            warn.innerHTML = "*Please enter a correct Product Discount";
          } else {
            if (!productFeildValidation(pro_seller)) {
              warn.innerHTML = "*Please enter a Product Seller";
            } else {
              if (!productFeildValidation(pro_delivery)) {
                warn.innerHTML = "*Please enter a Product Delivery";
              } else {
                warn.innerHTML = "Unknown Error";
              }
            }
          }
        }
      }
    }
  }


function deleteProduct() {
  var i;

  document.getElementById("heading").style.margin = "5% 0 3% 9";

  var table =
    "<tr><th>Product ID</th><th>Product Name</th><th>Price</th><th>Discount</th><th>Supplier</th><th>Delivery</th><th></tho</tr>";

  var x = xmlDoc.getElementsByTagName("product");
  // Start to fetch the data by using TagName
  for (i = 0; i < x.length; i++) {
    p_id = x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue
    table +=
      "<tr><td>" +
      p_id +
      "</td><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>g" +
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("discount")[0].childNodes[0].nodeValue +
      "%</td><td>" +
      x[i].getElementsByTagName("seller")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("delivery")[0].childNodes[0].nodeValue +
      "</td><td" +
      "<button class='delBtn' id='d" +
      p_id +
      "'onclick='removeProduct(" +
      p_id +
      ")'><span class='glyphicon glyphicon-trash'></button></td></tr>";
  }

  // Print the xml data in table form

  document.getElementById("product-table").innerHTML = table;
}
function removeProduct(pid) {
  var xpath = "/products/product[id=" + pid + "]";

  var products = xmlDoc.getElementsByTagName("products")[0];

  var nodes = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
  var result = nodes.iterateNext();

  products.removeChild(result);

  deleteProduct();
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function updateProduct() {
  var i;

  document.getElementById("heading").style.margin = "5% 0 3% 0";
  var table =
    "<tr><th>Product ID</th><th>Product Name</th><th>Price</th><th>Discount</th><th>Supplier</th><th>Delivery</th><th></th></tr>";

  var x = xmlDoc.getElementsByTagName("product");
  // Start to fetch the data by using TagName
  for (i = 0; i < x.length; i++) {
    p_id = x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
    table +=
      "<tr><td>" +
      p_id +
      "</td><td>" +
      x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
      "</td><td>$" +
      x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("discount")[0].childNodes[0].nodeValue +
      "%</td><td>" +
      x[i].getElementsByTagName("seller")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("delivery")[0].childNodes[0].nodeValue +
      "</td><td>" +
      "<button class='editBtn' id='d" +
      p_id +
      "'onclick='openUdateForm(" +
      p_id +
      ")'><span class='glyphicon glyphicon-edit'></button></td></tr>";
  }

  // Print the xml data in table form
  document.getElementById("product-table").innerHTML = table;
}

function openUdateForm(pid) {
  document.getElementById("update-form").style.display = "block";
  document.getElementById("userid").value = pid;
  var xpath = "/products/product[id=" + pid + "]";
  var nodes = xmlDoc.evaluate(xpath, xmlDoc, null, XPathResult.ANY_TYPE, null);
  var result = nodes.iterateNext();
  document.getElementById("u_proname").value =
    result.getElementsByTagName("name")[0].childNodes[0].nodeValue;
  document.getElementById("u_price").value =
    result.getElementsByTagName("price")[0].childNodes[0].nodeValue;
  document.getElementById("u_discount").value =
    result.getElementsByTagName("discount")[0].childNodes[0].nodeValue;
  document.getElementById("u_seller").value =
    result.getElementsByTagName("seller")[0].childNodes[0].nodeValue;
  document.getElementById("u_delivery").value =
    result.getElementsByTagName("delivery")[0].childNodes[0].nodeValue;
  document.getElementById("update-product").addEventListener("click", () => {
    editProduct(pid);
  });
}
function editProduct(pid) {
  var pro_name = document.getElementById("u_proname").value;

  var pro_price = document.getElementById("u_price").value;

  var pro_discount = document.getElementById("u_discount").value;
  var pro_seller = document.getElementById("u_seller").value;

  var pro_delivery = document.getElementById("u_delivery").value;

  if (
    productFeildValidation(pro_name) &&
    productPriceValidation(pro_price) &&
    productDiscountValidation(pro_discount) &&
    productFeildValidation(pro_seller) &&
    productFeildValidation(pro_delivery)
  ) {
    var xpath = "/products/product[id=" + pid + "]";
    var nodes = xmlDoc.evaluate(
      xpath,
      xmlDoc,
      null,
      XPathResult.ANY_TYPE,
      null
    );

    var result = nodes.iterateNext();
    result.getElementsByTagName("name")[0].childNodes[0].nodeValue = pro_name;
    result.getElementsByTagName("price")[0].childNodes[0].nodeValue = pro_price;

    result.getElementsByTagName("discount")[0].childNodes[0].nodeValue;

    pro_discount;

    result.getElementsByTagName("seller")[0].childNodes[0].nodeValue =
      pro_seller;

    result.getElementsByTagName("delivery")[0].childNodes[0].nodeValue =
      pro_delivery;

    closeUdateForm();
    updateProduct();
  } else {
    var warn = document.getElementById("“update-warning");
    if (!productFeildValidation(pro_name)) {
      warn.innerHTML = "*Please enter a Product Name";
    } else {
      if (!productPriceValidation(pro_price)) {
        warn.innerHTML = "*Please enter a correct Product Price";
      } else {
        if (!productDiscountValidation(pro_discount)) {
          warn.innerHTML = "*Please enter a correct Product Discount";
        } else {
          if (!productFeildValidation(pro_seller)) {
            warn.innerHTML = "*Please enter a Product Seller";
          } else {
            if (!productFeildValidation(pro_delivery)) {
              warn.innerHTML = "*Please enter a Product Delivery";
            } else {
              warn.innerHTML = "Unknown Error";
            }
          }
        }
      }
    }
  }
}
function closeUdateForm() {
  document.getElementById("update-form").style.display = "none";
}

function countProduct() {
  pCount = xmlDoc.getElementsByTagName("product").length;

  document.getElementById("pcount").innerHTML =
    pCount + " products are present in the store.";

  document.getElementById("product-count").style.display = "block";
}

function countClose() {
  document.getElementById("product-count").style.display = "none";
}
function productFeildValidation(field) {
  return field != "";
}
function productPriceValidation(price) {
  const exp = /^\d+(?:\.\d+)?(?:, \d+(?:\.\d+)?)*$/;
  return exp.test(price);
}

function productDiscountValidation(discount) {
  const exp = /\b([0-9]|[1-9][0-9]|100)\b/;
  return exp.test(discount);
}
