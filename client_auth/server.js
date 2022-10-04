const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const helmet = require('helmet');
const { join } = require('path');
const authConfig = require('./auth_config.json');
const cors = require('cors');
const app = express();

const port = process.env.SERVER_PORT || 4200;
const API_SERVICE_URL = "http://api:80";
app.use(morgan('dev'));

app.use(
  helmet({
    contentSecurityPolicy: {
      // reportOnly: true,
      directives: {
        'default-src': ["'self'"],
        'connect-src': ["'self'", 'https://*.auth0.com', authConfig.apiUri, 'http://localhost:7009', 'http://api'],
        'frame-src': ["'self'", 'https://*.auth0.com'],
        'base-uri': ["'self'"],
        'block-all-mixed-content': [],
        'font-src': ["'self'", 'https:', 'data:'],
        'frame-ancestors': ["'self'"],
        'img-src': ["'self'", 'data:', '*.gravatar.com', "https://lh3.googleusercontent.com"],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
      },
    },
  })
);
// Proxy endpoints
app.use('/weatherforecast', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
}));
app.use(cors());
app.use(express.static(join(__dirname, 'dist')));

app.listen(port, () => console.log(`App server listening on port ${port}`));