//src/app/index.js

require('./util/console');
const config = require('./config');
const course = require('./course');

console.h1('app started!');
console.h1(course.getStartDate());

config.loadConfig();