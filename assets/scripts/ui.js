'use strict'
const store = require('../store')
const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('alert-warning')
  $('#message').addClass('alert-success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('alert-success')
  $('#message').addClass('alert-warning')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed')
  $('#sign-up').trigger('reset')
}
