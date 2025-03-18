const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  console.log('Request served by node app');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
