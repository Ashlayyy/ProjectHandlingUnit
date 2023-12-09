/* Requiring all non-local packages */
const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');

const data = require('./data/data.json')
const app = express();
const port = 7999;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(morgan('dev'));

app.get('/:id', (req, res) => {
    res.send(req.params)
    //res.redirect(`http://localhost:${req.params.id}`, 201)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});