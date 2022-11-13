<?xml version = "1.0" encoding = "UTF-8"?>
<xsl:stylesheet version = "1.0"
xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
   <xsl:template match = "/">
      <html>
         <body>
            <h2>Electrical Store System</h2>
            <div id="table" style="display:none">
                <table border = "1">
                <tr bgcolor = "pink">
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Supplier</th>
                    <th>Delivery</th>
                </tr>
                <xsl:for-each select = "class/employee">
                <xsl:sort select = "lastname"/>
                        <tr>
                        <td><xsl:value-of select = "Name"/></td>
                        <td><xsl:value-of select = "Price"/></td>
                        <td><xsl:value-of select = "Discount"/></td>
                        <td><xsl:value-of select = "Supplier"/></td>
                        <td><xsl:value-of select = "Delivery"/></td>
                    </tr>
                </xsl:for-each>
                </table>
            </div>
         </body>
         <script src="index.js"></script>
      </html>
  </xsl:template>
</xsl:stylesheet>