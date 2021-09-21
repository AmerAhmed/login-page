'use strict'

// retrieved from the html file
let userSigin = document.querySelector('#userSigin')
let userName = document.querySelector('#userName')
let userPass = document.querySelector('#userPass')
let btn = document.querySelector('#btn')

// The correct values for name and password
let user = 'test'
let pass = '1234'

// The user clicks on the button and function runs
btn.addEventListener('click', check)

function check() {
  if (userName.value === user && userPass.value === pass) {
    localStorage.setItem('Username', userName.value)
  }
  store()
}

function store() {
  userSigin.style.display = 'none'
  let newlogin = document.createElement('fieldset')
  let legend = document.createElement('legend')
  let logOutBtn = document.createElement('button')

  if (localStorage.getItem('Username')) {
    legend.innerHTML = 'You are successfully logged in.'
    logOutBtn.innerHTML = 'Logout'
  } else {
    legend.innerHTML = 'Username or password is invalid.'
    logOutBtn.innerHTML = 'Go Back'
  }
  logOutBtn.addEventListener('click', () => {
    localStorage.clear()
    userSigin.style.display = 'block'
    newlogin.remove()
  })
  document.body.appendChild(newlogin)
  newlogin.appendChild(legend)
  newlogin.appendChild(logOutBtn)
}

if (localStorage.getItem('Username')) {
  store()
}
