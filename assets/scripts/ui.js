'use strict'

const handlebars = require('./templates/books.handlebars')

const successMessage = function (newText) {
  $('#user_message').text(newText)
}

const failureMessage = function (newText) {
  $('#user_message').text(newText)
}

const onGetBookSuccess = function (response) {
  const bookhtml = handlebars({ books: response.books })
  $('.handlebars').append(bookhtml)
  successMessage('Here is your book')
}

const onGetBookFailure = function () {
  failureMessage('failed')
}

module.exports = {
  onGetBookSuccess,
  onGetBookFailure
}
