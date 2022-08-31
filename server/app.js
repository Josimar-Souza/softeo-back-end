const express = require('express');
const cors = require('cors');
const rootRouter = require('../controller/rootRouter');
const Error = require('../middlewares/Error');

const app = express();

app.use(express.json());
app.use(cors());

rootRouter(app);

app.use(Error);

module.exports = app;
