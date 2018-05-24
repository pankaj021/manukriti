var path = require('path')

module.exports = {
   entry: ["babel-polyfill",'./client/src/app.js'],
    output: {
      path: './client',
      filename: '/public/build/bundle.min.js',
    },
  watch: true,
  module:{
    noParse: /node_modules\/roving-index\/index.js/,
    loaders:[
      {
        text: /\.(es6|js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          "presets": ["react", "es2015"]
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader : 'file-loader',
      }
    ]
  },

  resolve :{
    extensions : ['','.js','.jsx'],
    alias: {
           'jquery' : "jquery/src/jquery",
           //'sinon' : 'sinon/pkg/sinon'
       }
  },
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true
  }
}
