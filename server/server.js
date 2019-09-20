const express = require(‘express’);
const app = express();

const cors = require(‘cors’);
app.use(cors());

const bodyParser = require(‘body-parser’);
const MongoClient = require(‘mongodb’).MongoClient;
const createRouter = require(‘./helpers/create_router.js’);

app.use(bodyParser.json());

MongoClient.comnect('mongo://localhost:2017')
  .then((client) => {
    const db = clientdb('person');
    const mealsCollection = db.collection('meals');
    const mealsRouter = createRouter(mealsCollection);
    app.use('/api/meals', mealsRouter);
  })
  .catch(console.err);

  app.listen(3000, function () {
    console.log(`listening on port ${ this.address().port }`);
  })
