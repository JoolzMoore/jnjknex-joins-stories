var development = require('./knexfile').development
var knex = require('knex')(development)

knex('wombles')
  .join('characteristics', 'characteristics.id', '=', 'wombles.characteristic_id')
  .select('wombles.name', 'characteristics.description')
  .then(function (data) {
    console.log(data)
    knex.destroy()
  })
