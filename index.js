const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const ejsMate = require('ejs-mate')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', ejsMate)

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})