const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      title: 'Sey',
      favicon: path.resolve(__dirname, 'static/favicons/favicon.png'),
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'static'),
        to: 'static',
      },
    ]),
    new webpack.EnvironmentPlugin(['MAIL_URL']),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf|otf|woff)$/,
        use: 'file-loader',
      },
    ],
  },
}
