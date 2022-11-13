<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <div id="table">
            <table border="1">
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
        </div>
    </xsl:template>
</xsl:stylesheet>
