const express = require('express');
const cors = require('cors');
const volleyball  = require('volleyball');
const booksearchRouter = require('./routes/bookSearch');

const app = express();

app.use(cors());
app.use(volleyball);
app.use(express.json());

app.use('/api/booksearch', booksearchRouter);

function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found - ' + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port', port);
});