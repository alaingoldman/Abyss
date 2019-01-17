// import config from '../webpack.config.dev';
// import express from 'express';
// import open from 'open';
// import path from 'path';
// import webpack from 'webpack';

/* eslint-disable no-console */

// const port = 3000;
// const app = express();
// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));

// app.get('/users', function(req, res) {
//   // Hard coding for simplicity, Pretend this hits a real database
//   res.json([
//     {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
//     {"id": 1, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com"},
//     {"id": 1, "firstName": "Tina", "lastName": "lee", "email": "lee.tina@hotmail.com"}
//   ]);
// });

// app.get('*', function(req, res) {
//   res.sendFile(path.join( __dirname, '../src/index.html'));
// });


// app.listen(port, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     open(`http://localhost:${port}`);
//   }
// });

const express =  require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port')); 
});