const api = require('./api.js')
const ui = require('./ui.js')

const onGetBooks = () => {
  api.bookIndex()
    .then(ui.onGetBooksSuccess)
    .catch(ui.onGetBooksFailure)
}

module.exports = onGetBooks
