var development = require('./knexfile').development
var knex = require('knex')(development)

function getWombles() {
  return knex('wombles').select()
    .catch(function (error) {
      console.log('error returned', error)
    })
}


module.exports = {
  getWombles: getWombles
}
