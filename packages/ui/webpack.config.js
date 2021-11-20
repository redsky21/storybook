const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  bail: true,
  devtool: false,

  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'cns-ui'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: require.resolve('css-loader'),
            options: { importLoaders: 1 },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              postcssOptions: {
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')({
                    autoprefixer: { flexbox: 'no-2009' },
                    stage: 3,
                  }),
                ],
              },
              sourceMap: false,
            },
          },
        ],
        sideEffects: true,
      },
      // {
      //   test: /\.(ts|tsx)$/,
      //   exclude: /node_module/,
      //   exclude: /node_module/,
      //   use: 'ts-loader',
      // },
    ],
  },

  resolve: {
    modules: [path.join(__dirname, 'src')], // 모듈 위치
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  plugins: [
    new webpack.DefinePlugin({
      VERSION: '1.0.0',
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
    ],
  },
};
