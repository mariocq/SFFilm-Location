var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'test');

module.exports = {
  entry: "./test/karma.restful-api.js",
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  }
};
