const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const createError = require('http-errors');
const logger = require('morgan');
const { server: { PORT: port } } = require('./config');

require('./db/postgresDB/models');
require('./db/mongoDB');

const app = express();

app.use(cors());
app.use(helmet());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('/api/v1/*', [require('./middlewares/auth')]);

app.use('/', require('./routes'));

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use(require('./helpers/server-error'));

app.listen(port, () => console.log(`App listening at port ${port}`));
