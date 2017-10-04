const path = require('path');
const webpack = require('webpack');
//const autoprefixer = require('autoprefixer');

let development = process.env.NODE_ENV === "development";

module.exports = {
  devtool: development ? 'eval' : false,
  entry: [
		'webpack-hot-middleware/client',
		path.resolve(__dirname, 'src/entry.js')
	],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/'
  },
  resolve: {
    modules: [
			path.resolve(__dirname, "src/components"),
			path.resolve(__dirname, "src/routes"),
			path.resolve(__dirname, "src"),
			path.resolve(__dirname, "node_modules")
		],
		extensions: ['.ts', '.tsx', '.js', '.jsx', ".scss", ".css"]
  },
  plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(development ? 'development' : 'production'),
				WEBPACK: true
			}
		})
	],
  module: {
		rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: `babel-loader`,
            options: {
              plugins: [
                'transform-react-jsx',
                /* [
                  'react-css-modules',
                  {
                    context
                  }
                ] */
              ]
            },
          }
        ],
        include: __dirname + '/src',
      }
    ]
	}
};
