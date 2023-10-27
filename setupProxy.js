const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/svc', // The path you want to proxy
    createProxyMiddleware({
      target: 'https://api.nytimes.com', // The target domain
      changeOrigin: true,
    })
  );
};
