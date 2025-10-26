// server.js
const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // handle all requests with Next.js
  server.all('*', (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(`> Server running on http://localhost:${port}`);
  });
});
