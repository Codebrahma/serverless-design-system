module.exports = {
  module: {
    rules: [
      {
        test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2)$/,
        loader: "file-loader",
         query: {
           name: "[path][name].[hash].[ext]",
           // context: path.join(__dirname, config.source),
         },
      }
    ]
  }
}