const path = require(`path`);

const isDev = process.env.NODE_ENV === `development`;

module.exports = {
  mode: `development`,
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `./public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `./public`),
    open: true,
    port: 3838,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.node'],
    alias: {
      '@root': path.resolve(__dirname, `src/`),
      '@components': path.resolve(__dirname, `src/components/`),
    }
  },
  devtool: `source-map`
};
