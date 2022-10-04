const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('dist/client/'));

// app.use('/weatherforecast', createProxyMiddleware({
//   target: 'http://api',
//   changeOrigin: true,
// }));
// app.use(cors());

app.get('*', function(req,res) {
  res.sendFile(path.resolve('dist/client/index.html'));
});

app.listen(port, () => {
  console.log(`My Demo App listening on ${port} port`);
});
