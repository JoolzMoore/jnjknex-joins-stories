var development = require('./knexfile').development
var knex = require('knex')(development)

function getWombles() {
  return knex('wombles').select()
    .catch(function (error) {
      console.log('error returned', error)
    })
}

function getWomblesDes(id) {
  return knex('wombles')
    .join('characteristics', 'wombles.characteristic_id', '=', 'characteristics.id')
    .select('wombles.name', 'characteristics.description')
    .where('wombles.id', '=', id)
}

module.exports = {
  getWombles: getWombles,
  getWomblesDes: getWomblesDes
}
