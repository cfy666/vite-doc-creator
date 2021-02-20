const ViteDocCreator = require('./dev/my-vite-doc-creator');

module.exports = {
  plugins: [new ViteDocCreator({
    title: 'my vite doc creator',
    port: 3000,
    domain: 'http://localhost'
  })]
}