import path from 'path';

module.exports = {
  entry: "./src/index.tsx",
  output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
      rules: [
          // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
          { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
          { test: /\.jsx?$/, include: path.join(__dirname, 'src'), loaders: ['babel-preset-es2015', 'babel-preset-stage-0', 'babel-preset-react'] },

          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
      ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
};
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import path from 'path';
// import webpack from 'webpack';

// export default {
//   debug: true,
//   devtool: 'inline-source-map',
//   noInfo: false,
//   entry: [
//     'eventsource-polyfill', // necessary for hot reloading with IE
//     'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
//     path.resolve(__dirname, 'src/index')
//   ],
//   target: 'web',
//   output: {
//     path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, 'src')
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     // new webpack.NoErrorsPlugin(),

//     // Create HTML file that includes reference to bundled JS.
//     new HtmlWebpackPlugin({
//       template: 'src/index.html',
//       inject: true
//     })
//   ],
//   module: {
//     loaders: [
//       {test: /\.jsx?$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
//       {test: /(\.css)$/, loaders: ['style', 'css']},
//       {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
//       {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
//       {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
//       {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
//     ]
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   }
// };