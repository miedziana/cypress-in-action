const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const app = express();
const port = 4200;

app.use(express.static('dist/client/'));

app.use('/weatherforecast', createProxyMiddleware({
  target: 'http://api',
  changeOrigin: true,
}));
app.use(cors());

app.get('*', function(req,res) {
  res.sendFile(path.resolve('dist/client/index.html'));
});

app.listen(port, () => {
  console.log(`My Demo App listening on ${port} port`);
});
