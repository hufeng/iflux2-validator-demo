module.exports = {
  entry: './assets/js/app.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  resolve: {
    moduleDirectories: ['', 'web_modules', 'node_modules']
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'jsx-loader?harmony'}
    ]
  }
};
