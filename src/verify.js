const container = require('./container')
const { separator, space, footer, p } = require('./helpers')


const html = async data => {
  const { username, email, token } = data

  return `<table class="table" width="400" border="0" cellpadding="0" cellspacing="0" align="center">
    <tr>
      <td style="${p}">Hello <b>${username}</b>,</td>
    </tr>` +
    space(8) +
    `<tr>
      <td style="${p}">To complete the login process, please click/tap or copy and paste this URL below:</td>
    </tr>` +
    space(8) +
    `<tr>
      <td>
        <a target="_blank" href="https://devoops.app/api/registration/confirm?email=${email}&token=${token}" style="${p} word-break: break-all; color: #067df7; text-decoration: none;">
          https://devoops.app/api/registration/confirm?email=${email}&token=${token}
        </a>
      </td>
    </tr>` +
    space(64) +
    `<tr>
      <td style="font-size: 12px; color: #999; line-height: 1.8;">If you didn't attempt to log in but received this email please ignore this email. If you are concerned about your account's safety, please reply to this email to get in touch with us.</td>
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
