const path = require('path');
const merge = require('webpack-merge');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};
const TARGET = process.env.npm_lifecycle_event;

const common = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {});
}

if(TARGET === 'build') {
  module.exports = merge(common, {});
}