var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  files.push(pattern(path.dirname(require.resolve('chai-subset')) + '/chai-subset.js'));
};

framework.$inject = ['config.files'];
module.exports = {'framework:chai-subset': ['factory', framework]};