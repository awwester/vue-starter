module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/custom.scss";
        `
      }
    }
  }
}
