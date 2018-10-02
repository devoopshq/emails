const container = require('./container')
const { space, footer, p } = require('./helpers')


const html = async data => {
  const { email, token } = data

  return `<table class="table" width="400" border="0" cellpadding="0" cellspacing="0" align="center">
    <tr>
      <td style="${p()}">Hello <b>there</b>,</td>
    </tr>` +
    space(8) +
    `<tr>
      <td style="${p()}">To complete the signup process, click/tap or copy and paste URL below:</td>
    </tr>` +
    space(8) +
    `<tr>
      <td style="${p()}">
        <a target="_blank" href="https://devoops.app/confirm?email=${email}&token=${token}&mode=signup" style="${p()} word-break: break-all; color: #067df7; text-decoration: none;">
          https://devoops.app/confirm?email=${email}&token=${token}&mode=signup
        </a>
      </td>
    </tr>` +
    space(64) +
    `<tr>
      <td style="${p('12px', '1.8')} color: #999;">If you didn't attempt to sign up but received this email please ignore this email. If you are concerned about your account's safety, please reply to this email to get in touch with us.</td>
    </tr>` +
    space(8) +
    footer +
    space(64) +
  `</table>`
}

module.exports = async data => {
  const inner = await html(data)

  return  await container(inner)
}
