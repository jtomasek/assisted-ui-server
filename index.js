const express = require('express')
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()
const port = 5000
const apiUrl = 'http://10.40.128.49:6000'

app.use(express.static(path.join(__dirname, '/build')));

app.use('/api', createProxyMiddleware({ target: apiUrl, changeOrigin: true }));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})