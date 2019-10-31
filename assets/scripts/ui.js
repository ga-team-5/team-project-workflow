'use strict'

const handlebars = require('./templates/books.handlebars')

const successMessage = function (newText) {
  $('#user_message').text(newText)
}

const failureMessage = function (newText) {
  $('#user_message').text(newText)
}

const onGetBooksSuccess = function (response) {
  const bookhtml = handlebars({ books: response.books })
  $('.handlebars').append(bookhtml)
  successMessage('Here is your book')
}

const onGetBooksFailure = function () {
  failureMessage('failed')
}

module.exports = {
  onGetBooksSuccess,
  onGetBooksFailure
}
