const path = require("path");
const webpack = require("webpack");
//const autoprefixer = require("autoprefixer");

module.exports = {
  devtool: false,
  entry: [
		path.resolve(__dirname, "src/entry.js")
	],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/"
  },
  resolve: {
    modules: [
			path.resolve(__dirname, "src/components"),
			path.resolve(__dirname, "src/routes"),
			path.resolve(__dirname, "src"),
			path.resolve(__dirname, "node_modules")
		],
		extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".css"]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production"),
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
            loader: "babel-loader",
            options: {
              plugins: [
                "transform-react-jsx",
                /* [
                  "react-css-modules",
                  {
                    context
                  }
                ] */
              ]
            },
          }
        ],
        include: __dirname + "/src",
      }
    ]
	}
};