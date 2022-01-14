const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'cam nguyen | home',
      favicon: './src/assets/images/favicon.ico',
      template: './src/index.html',
      ogimage:
        'https://combinatronics.com/Cambuchi/cambuchi.github.io-build/main/src/assets/images/og-image.jpg',
      meta: {
        description: {
          name: 'description',
          content: 'Welcome to the homepage of Cam Nguyen!',
        },
        keyword: {
          name: 'keywords',
          content: 'Blog, Vanta.js, Javascript, Webpack',
        },
        'og:title': {
          property: 'og:title',
          content: 'cam nguyen | home',
        },
        'og:description': {
          property: 'og:description',
          content: 'Welcome to the homepage of Cam Nguyen!',
        },
        'og:type': { property: 'og:type', content: 'blog' },
        'og:url': {
          property: 'og:url',
          content: 'https://cambuchi.github.io/',
        },
        'twitter:title': {
          name: 'twitter:title',
          content: 'cam nguyen | home',
        },
        'twitter:description': {
          name: 'twitter:description',
          content: 'Welcome to the homepage of Cam Nguyen!',
        },
      },
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        //for importing css
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        //for importing images
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        //for importing fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
