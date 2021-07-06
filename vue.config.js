module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/x4u/" : "/",
  transpileDependencies: ["vuex-persist"]
};
