module.exports = {
  entry: './src/index.js', // ruta al entry point
  output: {
    path: __dirname + '/dist', // path donde webpack dejarǻ los archivos.
    filename: 'bundle.js', // archivo del bundle
  },
  module: {
    rules: [
             {
         test: /\.(js|jsx|m?js)$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader',
           options: {
             presets: ['@babel/preset-react', '@babel/preset-env']
           }
         }
       },
       {
        test: /\.(css|s[ac]ss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: 
              {
                modules: {
                  localIdentName: "[local]___[hash:base64:5]"
                }
              }
          },
          {
            loader: "sass-loader"
          },
        ]
      },
      {
        test: /\.gcss$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};