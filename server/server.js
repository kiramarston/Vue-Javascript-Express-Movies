const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('films_hub');
  const filmsCollection = db.collection('films');
  const filmsRouter = createRouter(filmsCollection);
  app.use('/api/films', filmsRouter);
})
.catch(console.error);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
