import chalk from 'chalk';
import fs from 'fs';
import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
    if (err) {
        /* eslint-disable no-console */
        return console.log(chalk.red(err));
    } else {
        console.log(chalk.green("Mock data generated"));
        /* eslint-enable no-console */
    }
});