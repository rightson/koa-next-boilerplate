require('babel-register')({
    "presets": ["es2015"],
    "plugins": ["transform-async-to-generator"]
}); // the configurations can be extracted to .babelrc file
require('babel-polyfill');
require('./app');
