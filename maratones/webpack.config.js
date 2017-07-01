const webpack = require('webpack'),
  path = require('path'),
  srcDir = path.resolve( __dirname, 'src' ),
  publicDir = path.resolve( __dirname, 'public' ),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  context: srcDir,
  devtool: 'source-map',
  entry: [
    './js/index.js'
  ],
  output: {
    path: publicDir,
    filename: 'script.js',
    publicPath: './',
    sourceMapFilename: 'main.map'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: 'json-loader'
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ],
          publicPath: publicDir
        })
      }
    ]
  },
  plugins: [
    //para manejar de una mejor forma los nombres y hashes de los archivos en dev
    new webpack.NamedModulesPlugin(),
    //para manejar de una mejor forma los nombres y hashes de los archivos en prod
    new webpack.HashedModuleIdsPlugin(),
    //Extrae el código CSS de nuestra aplicación y lo coloca en un archivo CSS
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    }),
    //Generar los HTMLs en la carpeta pública
    new HtmlWebpackPlugin({
      //usar un template
      template: path.join(srcDir, 'index.html'),
      //donde se pondrá el archivo compilado
      path: publicDir,
      //nombre del archivo compilado
      filename: 'index.html',
      //generar un hash único al archivo js
      hash: true,
      //minificar el HTML
      minify: {
        collapseWhitespace: false
      }
    })
  ],
  devServer: {
    contentBase: srcDir,
    publicPath: '/',
    historyApiFallback: true,
    port: 3000
  }
}
