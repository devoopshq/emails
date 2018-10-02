const separator = (height = 12, color = '#e0e0e0') =>
  `<tr><td height="${height}"></td></tr>
   <tr><td height="${height}" style="border-top: 1px solid ${color};"></td></tr>`

const space = x => `<tr><td height="${x}"></td></tr>`

const footer = `<tr>
  <td style="font-size: 12px;">
    <a target="_blank" href="https://devoops.app" style="color: #999999; text-decoration: none;"><b>Devoops</b></a>
  </td>
</tr>`
const p = `font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; line-height: 1.5;`

module.exports = { separator, space, footer, p }
