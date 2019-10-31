'use strict'

const store = require('../store')
const successMessage = function (newText) {
  $('#user_message').text(newText)
}

const failureMessage = function (newText) {
  $('#user_message').text(newText)
}
