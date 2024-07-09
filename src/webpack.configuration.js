// webpack.config.js
module.exports = {
  // Other webpack configuration
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [
          {
            loader: 'source-map-loader',
            options: {
              exclude: /node_modules\/react-marquee-slider/,
            },
          },
        ],
      },
    ],
  },
};
