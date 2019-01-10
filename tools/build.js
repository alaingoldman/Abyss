/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

webpack(webpackConfig).run((err, stats) => {
    if (err) { // so a fatal error occured. Stop here.
        console.log(chalk.red(err));
        return 1;        
    }
    return 0;
})