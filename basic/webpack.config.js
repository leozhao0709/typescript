module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: 'ts-loader'
    }]
  }
}