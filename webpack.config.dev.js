import * as path from "path";
import * as webpack from "webpack";
//const autoprefixer = require("autoprefixer");

let cssModulesLoader = "css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]"

module.exports = {
  devtool: "inline-source-map",
  entry: [
    "webpack-hot-middleware/client",
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
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development"),
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
      },
      {
        test: /\.scss/,
        use: [
          "style-loader",
          cssModulesLoader,
          "postcss-loader",
          "sass-loader"
        ],
        include: [
          path.resolve(__dirname, "src/")
        ]
      }
    ]
	}
};
