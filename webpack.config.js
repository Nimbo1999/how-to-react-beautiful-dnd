// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

/**
 * Recebe o nome do styleLoader que vai ser utilizado e gera uma configuração base para o projeto.
 * @param {string} stylesHandler nome do styleLoader a ser utilizado.
 * @returns Configuração base para desenvolvimento e produção.
 */
const getBaseConfig = stylesHandler => ({
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			inject: 'body',
			minify: true,
		}),
	],
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/i,
				loader: 'ts-loader',
				exclude: ['/node_modules/'],
			},
			{
				test: /\.less$/i,
				use: [stylesHandler, 'css-loader', 'postcss-loader', 'less-loader'],
			},
			{
				test: /\.css$/i,
				use: [stylesHandler, 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: 'asset',
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
});

module.exports = ({ WEBPACK_SERVE }, { mode = 'development' }) => {
	const isProduction = !WEBPACK_SERVE && mode === 'production';

	const config = getBaseConfig(isProduction ? MiniCssExtractPlugin.loader : 'style-loader');

	config.mode = mode;

	if (isProduction) {
		config.plugins.push(new MiniCssExtractPlugin());

		config.plugins.push(
			new CopyPlugin({
				patterns: [{ from: path.join(__dirname, 'public', 'meta.json'), to: path.join(__dirname, 'dist') }],
			})
		);

		config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
	} else {
		config.devServer = {
			open: true,
			host: 'localhost',
			compress: true,
			port: 3000,
		};
	}

	return config;
};
