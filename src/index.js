import index from './verify.js'

const data = {
  username: 'username',
  token: 'nF0VMbCuS3QhdNrUO8VGFkYR',
  email: 'you@domain.com'
}

index(data)
  .then(x => document.body.innerHTML = x )
