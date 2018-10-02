import signup from './signup.js'

const data = {
  username: 'username',
  token: 'nF0VMbCuS3QhdNrUO8VGFkYR',
  email: 'you@domain.com'
}

signup(data)
  .then(x => document.body.innerHTML = x )
