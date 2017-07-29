const webpack = require('webpack'),
  path = require('path'),
  srcDir = path.resolve( __dirname, 'src' ),
  publicDir = path.resolve( __dirname, 'public' ),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ReloadPlugin = require('reload-html-webpack-plugin')

module.exports = {
  context: srcDir,
  devtool: 'source-map',
  entry: {
    script: './index.js',
    acerca: './acerca.js',
    contacto: './contacto.js'
  },
  output: {
    path: publicDir,
    filename: '[name].js',
    publicPath: './',
    sourceMapFilename: 'main.map'
  },
  devServer: {
    contentBase: srcDir,
    publicPath: '/',
    historyApiFallback: true,
    compress: true,
    open: true,
    hot: true,
    stats: 'errors-only',
    port: 3000
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
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/,
        use: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      {
        test: /\.(ttf|eot|woff2?|mp4|txt|xml)$/,
        use: [
          'file-loader?name=[path][name].[ext]'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReloadPlugin(),
    //Generar los HTMLs en la carpeta pública
    new HtmlWebpackPlugin({
      title: 'M A R A T Ó N - 4 2 . 1 9 5 km',
      description: 'Bienvenid@s, en este sitio encontrarás información sobre el maravilloso mundo de los maratones.',
      //usar un template
      template: path.join(srcDir, 'index.html'),
      //donde se pondrá el archivo compilado
      path: publicDir,
      //nombre del archivo compilado
      filename: 'index.html',
      favicon: './assets/img/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      //generar un hash único al archivo js
      hash: true,
      //indico que archivo JS cargará mi HTML
      chunks: ['script']
    }),
    new HtmlWebpackPlugin({
      title: 'Orígenes - M A R A T Ó N',
      description: 'En esta sección te explicamos todo sobre el origen de la Maratón.',
      //usar un template
      template: path.join(srcDir, 'index.html'),
      //donde se pondrá el archivo compilado
      path: publicDir,
      //nombre del archivo compilado
      filename: 'acerca.html',
      favicon: './assets/img/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      //generar un hash único al archivo js
      hash: true,
      chunks: ['acerca']
    }),
    new HtmlWebpackPlugin({
      title: 'Contacto - M A R A T Ó N',
      description: '¿Te gusto este sitio? Déjanos tus comentarios.',
      //usar un template
      template: path.join(srcDir, 'index.html'),
      //donde se pondrá el archivo compilado
      path: publicDir,
      //nombre del archivo compilado
      filename: 'contacto.html',
      favicon: './assets/img/favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      //generar un hash único al archivo js
      hash: true,
      chunks: ['contacto']
    })
  ]
}
