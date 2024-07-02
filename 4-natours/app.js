const express = require('express');

const app = express();

app.get('/api/v1/tours', (req, res) => {});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}...`);
});
