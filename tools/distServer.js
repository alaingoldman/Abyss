import compression from 'compression';
import express from 'express';
import open from 'open';
import path from 'path';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression()); // this is NOT for actual production use. This is just useful for hosting the 
                        // minified production build for local debugging purposes.
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});



app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});