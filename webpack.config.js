const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
	const buildFolderName = "build";
	return {
		devtool: "eval-source-map",
		//Définit le point d'entré de l'application
		entry: "./src/index.jsx",
		resolve: {
			extensions: [".tsx", ".js", ".ts", ".jsx"],
		},
		//Définit l'emplacement du dossier construit
		output: {
			filename: "bundle.[fullhash].js",
			path: path.resolve(__dirname, buildFolderName),
			publicPath: "/",
		},
		devServer: {
			//Définit le dossier public autant que dossier static
			static: {
				directory: path.join(__dirname, "public"),
			},
			compress: true,
			//Définit le port utilisé par le serveur de developpement
			port: 3001,
			historyApiFallback: true,
		},
		plugins: [
			//Définit le fichier html dans lequel le bundle sera chargé
			new HtmlWebpackPlugin({
				template: "./public/index.html",
			}),
		],
		module: {
			rules: [
				//Définit le loaderles fichier pouvant contenir du JSX
				{
					test: /\.(js|ts)x?$/,
					exclude: /node_modules/,
					loader: require.resolve("babel-loader"),
				},
				//Définit le loader pour les fichiers de style
				{
					test: /\.css$/,
					use: ["style-loader", "css-loader"],
				},
				//Définit le loader pour les images
				{
					test: /\.png|svg|jpg|jpeg|gif|ico$/,
					use: ["file-loader"],
				},
			],
		},
	};
};
