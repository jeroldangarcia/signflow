const webpack = require('webpack');
const {resolve} = require('path');
module.exports = env => {
  return {
    entry: {
      app: ['./js/main.js'],
      vendor: [
        'chart.js',
        'react',
        'react-dom',
        'react-hammerjs',
        'react-sticky-position',
        'react-chartjs-2',
        'blueimp-load-image',
        'es6-promise',
        'whatwg-fetch',
        'clipboard-js',
        'localforage',
      ],
    },
    output: {
      filename: 'bundle.[name].js',
      //path: resolve(__dirname, 'dist'),
      path: '/Users/jeroldan/Code/eclipse/workspace/signflow_API/src/main/webapp',
      pathinfo: !env.prod,
    },
    context: resolve(__dirname, 'src'),
    devServer: {
      inline: true,
      contentBase: './dist',
      https: false,
      //host: '192.168.1.237',
      //host:'192.168.2.62',
      port: 5555,
      proxy: {
        "/authenticate": {
          target:"http://localhost:5000/",
          secure:"false"
        },
        "/api/*":{
          target:"http://localhost:5000/",
          secure:"false"
        }
      },
      hot: true,
      historyApiFallback: true,
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx?$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/ },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
        { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      ]
    },
    plugins: [
      env.test ? undefined : new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })
    ].filter(p => !!p)
  }
}
