const fetch = require('node-fetch');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', async (req, res) => {
  const { inArguments } = req.body;
  await fetch('https://eoitnqeyosaiq64.m.pipedream.net', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(inArguments[0]),
  });
  res.end(JSON.stringify(inArguments[0]));
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
