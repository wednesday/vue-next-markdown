var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './node/main.ts',
  output: {
    path: path.resolve(__dirname, './dist/api-server'),
    publicPath: '/',
    filename: 'main.js'
  },
  module: {
      rules:[
        {
            test: /\.tsx?$/,
            use: [
              {
                loader: "ts-loader",
                options: {
                  transpileOnly: true,
                  logLevel: 'warn'
                }
              }
            ],
            exclude: /node_modules/
          }
      ]
      
  },
  resolve: {
    extensions: ['.ts']
  }
}
