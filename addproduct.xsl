<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version = "1.0"
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
    <xsl:template match = "/">
        <html>
            <body>
                <div>
                    <form>
                        <label for="pname">Product Name</label>
                        <input type="text" id="pname" name="productname" placeholder="Enter Product name..">
                        </input>
                        <label for="pprice">Last Name</label>
                        <input type="integer" id="pprice" name="productprice" placeholder="Enter Product Price..">
                        </input>
                        <label for="pdiscount">Last Name</label>
                        <input type="integer" id="pdiscount" name="productdiscount" placeholder="Enter Product Discount..">
                        </input>
                        <label for="psupplier">Product Supplier</label>
                        <input type="text" id="psupplier" name="productsupplier" placeholder="Enter Product Supplier..">
                        </input>
                        <label for="pdelievery">Product Delievery</label>
                        <input type="text" id="pdelievery" name="productdelievery" placeholder="Enter Product Delievery..">
                        </input>
                        <input type="submit" value="Submit">
                        </input>
                    </form>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>