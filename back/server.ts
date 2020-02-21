import express = require('express');
import serveIndex = require('serve-index');
import cors = require('cors');
import fs = require('fs');
import path = require('path');
const app = express();

const www = '../front/dist/front';

const filename = path.resolve(__dirname, 'quizz-map.json');
let quizzMap = {};
try {
  const str = fs.readFileSync(filename, { encoding: 'utf8' });
  quizzMap = JSON.parse(str);
} catch (e) {
  console.log('cannot read file quizz-map.json.');
}

app.use(cors());
app.use(express.json());

app.get('/ws/quizz', (req, res, next) => {
  return res.json(quizzMap);
});

app.post('/ws/quizz', (req, res, next) => {
  quizzMap = req.body;
  fs.writeFileSync(filename, JSON.stringify(quizzMap, undefined, 2));
  return res.status(201).end();
});

app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
