var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var endsWith = function(substr) {
  return function(str) {
    return str.indexOf(substr) === (str.length - substr.length);
  };
};

var framework = function(files) {
  files.push(pattern(path.resolve(require.resolve('chai-subset'))));
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-subset': ['factory', framework]};