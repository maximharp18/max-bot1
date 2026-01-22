import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// ОБЯЗАТЕЛЬНО
app.use(express.json());

app.get('/', (req, res) => {
  res.send('OK');
});

app.post('/webhook', (req, res) => {
  console.log('===== WEBHOOK RECEIVED =====');
  console.log('HEADERS:', req.headers);
  console.log('BODY:', JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
