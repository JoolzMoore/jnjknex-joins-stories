var db = require('./db')

module.exports = {
  getUsers: getUsers
}

function getUsers(req, res) {
  db.getUsers()
    .then(sendUsers)
    .catch(sendError)

  function sendUsers(users) {
    res.send(users)
  }

  function sendError(err) {
    console.error(err.message)
    res.status(500).send("Couldn't show you the users!")
  }
}
