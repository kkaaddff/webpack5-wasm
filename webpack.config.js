module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true,
  },
};
