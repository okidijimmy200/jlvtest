const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
module.exports = {
  entry: './src/index.tsx', // Changed the entry file name
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {       
      directory: path.resolve(__dirname, './dist')
    },
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [new HtmlWebpackPlugin({
    filename: "index.html",
    template: "./dist/index.html",
    favicon: "./dist/LogoFav.ico",
    title: 'Production',
  })],
}