<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <table id="newTable" border="1">
            <tr bgcolor="pink">
                <th onclick="sortTable(0)" name="a">Product Name</th>
                <th onclick="sortTable(1)" name="b">Price</th>
                <th onclick="sortTable(2)">Discount</th>
                <th onclick="sortTable(3)">Supplier</th>
                <th onclick="sortTable(4)">Delivery</th>
            </tr>
            <xsl:for-each select="class/employee">
                <xsl:sort select="lastname"/>
                <tr>
                    <td>
                        <xsl:value-of select="Name"/>
                    </td>
                    <td>
                        <xsl:value-of select="Price"/>
                    </td>
                    <td>
                        <xsl:value-of select="Discount"/>
                    </td>
                    <td>
                        <xsl:value-of select="Supplier"/>
                    </td>
                    <td>
                        <xsl:value-of select="Delivery"/>
                    </td>
                </tr>
            </xsl:for-each>
        </table>
    </xsl:template>
</xsl:stylesheet>
