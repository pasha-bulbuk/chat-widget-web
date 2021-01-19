module.exports = {
  assetsDir: "static",
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:3000/",
        ws: false,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
};
