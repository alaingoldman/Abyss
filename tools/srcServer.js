import config from '../webpack.config.dev';
import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';

/* eslint-disable no-console */

// const port = 3000;
const app = express();
const compiler = webpack(config);
app.set('port', (process.env.PORT || 5000));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/users', function(req, res) {
  // Hard coding for simplicity, Pretend this hits a real database
  res.json([
    {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
    {"id": 1, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com"},
    {"id": 1, "firstName": "Tina", "lastName": "lee", "email": "lee.tina@hotmail.com"}
  ]);
});

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});


app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${app.get('port')}`);
  }
});