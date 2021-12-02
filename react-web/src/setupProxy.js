const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app){
    app.use(
        "/api",
        createProxyMiddleware({
             target: 'https://scrm-dev.ti-scrm.com/', 
             changeOrigin: true , 
             pathRewrite:{ "^/api":"" } 
        })
    )
}