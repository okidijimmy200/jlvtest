const path = require('path')
module.exports = {
  entry: './src/Index.tsx', // Changed the entry file name
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  devServer: {
    static: {       
      directory: path.resolve(__dirname, './dist')
    }
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
}