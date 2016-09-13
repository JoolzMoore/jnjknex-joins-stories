var express = require('express')
var development = require('./knexfile').development
var knex = require('knex')(development)
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var app = express()

app.use(bodyParser.urlencoded())
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', __dirname + 'views')

app.get('/', function (req, res) {
  res.send('WOMBLES!')
})

var PORT = 3000

app.listen(PORT, function () {
  console.log('CLEANING UP ALL OF THE THINGS THAT WE FIND... ON PORT', PORT)
})

app.get('/views', knex('wombles')
  .join('characteristics', 'characteristics.id', '=', 'wombles.characteristic_id')
  .select('wombles.name', 'characteristics.description')
  .then(function (data) {
    res.render(data)
  })
)
