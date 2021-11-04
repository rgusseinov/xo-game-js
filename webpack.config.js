const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
     clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: './dist/index.html',
    title: 'Caching'
  })],
  devServer: {
    static: './dist',
    port: 3001
  },
};
