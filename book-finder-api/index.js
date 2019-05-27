const express = require('express');
const cors = require('cors');
const volleyball  = require('volleyball');
const booksearchRouter = require('./routes/bookSearch');
const path = require('path');
const { notFound, errorHandler } = require('./errorHandler');

const app = express();

const staticFilePath = '../book-finder-ui/dist';

const staticFilesRouter = express.Router();

app.use(cors());
app.use(volleyball);
app.use(express.json());
app.use(express.static(staticFilePath));

staticFilesRouter.route('/*').get((_, res) => res.sendfile(path.join(staticFilePath, 'index.html')));

app.use('/api/booksearch', booksearchRouter);
app.use('/', staticFilesRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Listening on port', port);
});