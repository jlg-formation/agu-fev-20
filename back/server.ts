import express = require('express');
import serveIndex = require('serve-index');
import cors = require('cors');
const app = express();

const www = '../front/dist/front';

app.use(cors());

app.get('/ws/quizz', (req, res, next) => {
  return res.json({ titi: 456 });
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
