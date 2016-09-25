require('babel-register')({
    "plugins": ["transform-async-to-generator"]
}); // the configurations can be extracted to .babelrc file
require('./app');
