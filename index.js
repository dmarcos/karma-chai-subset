var path = require('path');
var browserify = require('browserify');
var fs = require('fs');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

// var endsWith = function(substr) {
//   return function(str) {
//     return str.indexOf(substr) === (str.length - substr.length);
//   };
// };

// var framework = function(files) {
//   var sinonPath = path.resolve(require.resolve('sinon'), '../../pkg/sinon.js');
//   if (!_(files).map('pattern').find(endsWith(path.relative(__dirname, sinonPath)))) {
//     files.unshift(pattern(sinonPath));
//   }
//   

browserify({
  entries: path.join(__dirname, "./adapter.js")
})
.bundle()
.pipe(fs.createWriteStream('./chaiDapter.js'))

var framework = function(files) {
  files.push(pattern('./chaiDapter.js'));
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-subset': ['factory', framework]};