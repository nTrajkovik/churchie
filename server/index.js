const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

// Body parsing
app.use(bodyParser.json());

// Serving of static assets
app.use('/', express.static(path.resolve(__dirname, '../assets')));
app.use('/bundles', express.static(path.resolve(__dirname, '../bundles')));

app.listen(PORT, (e) => {
  if (e) {
    throw e;
  }
  console.log(`Server listetning on port ${PORT}`);
});
