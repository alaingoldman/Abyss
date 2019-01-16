// import compression from 'compression';
import chalk from 'chalk';
import express from 'express';
import open from 'open';
import path from 'path';

/* eslint-disable no-console */
console.log(chalk.red("distServer: part 1/6"));

const port = 3000;
console.log(chalk.green("distServer: part 2/6"));
const app = express();

// app.use(compression()); // this is NOT for actual production use. This is just useful for hosting the 
                        // minified production build for local debugging purposes.
app.use(express.static('dist'));
console.log(chalk.yellow("distServer: part 3/6"));

app.get('*', function(req, res) {
  console.log(chalk.blue("distServer: part 4/6"));
  res.sendFile(path.join( __dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
  console.log(chalk.magenta("distServer: part 5/6"));
  if (err) {
    console.log(err);
  } 
  else {
    console.log(chalk.bgGreen("distServer: part 6/6"));
    open(`http://localhost:${port}`);
  }
});