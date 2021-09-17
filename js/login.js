'use strict'
// name, password  an subimt
let txtuser = document.querySelector('.txtuser')
let txtpass = document.querySelector('.txtpass')
let submit = document.querySelector('.submit')

if (window.localStorage) {
  // Store values by using key and pair
  localStorage.setItem('user', 'test')
  localStorage.setItem('pass', '1234')

  // Get user and pass
  let user = localStorage.getItem('user')
  let pass = localStorage.getItem('pass')
  // Show a message
  let message = document.querySelector('.message')

  // Check for user and pass by using event click
  submit.addEventListener('click', (e) => {
    if (user == txtuser.value && pass == txtpass.value) {
      message.innerHTML = 'You have logged in successfully!'
    } else {
      message.innerHTML = 'Username or password is invalid!'
    }
    e.preventDefault()
  })
} else {
  console.log('No Supperted')
}
