const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server started on port 3000');
});

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/bmi', (req, res) => {
  const height = parseFloat(req.body.height);
  const weight = parseFloat(req.body.weight);
  const bmi = weight / (height * height);
  res.json({ bmi });
});

app.post('/bodyfat', (req, res) => {
  const height = parseFloat(req.body.height);
  const weight = parseFloat(req.body.weight);
  const age = parseFloat(req.body.age);
  const gender = parseFloat(req.body.gender);
  const bodyFat = (1.20 * req.body.bmi) + (0.23 * age) - (10.8 * gender) + 5.4;
  res.json({ bodyFat });
});

app.post('/idealweight', (req, res) => {
  const height = parseFloat(req.body.height);
  const gender = parseFloat(req.body.gender);
  const idealWeight = (height * height) * (22.0 + (gender === 0 ? 10 : -10));
  res.json({ idealWeight });
});

app.post('/caloriesburned', (req, res) => {
  const weight = parseFloat(req.body.weight);
  const duration = parseFloat(req.body.duration);
  const activityLevel = parseFloat(req.body.activityLevel);
  const caloriesBurned = (weight * duration * activityLevel) / 200;
  res.json({ caloriesBurned });
});
