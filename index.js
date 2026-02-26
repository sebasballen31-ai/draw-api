const express = require('express');
const app = express();
const port = 3200;

app.use((req, res, next) => {
  console.log('Middleware executed');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/bye', (req, res) => {
  res.send('Goodbye!');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
