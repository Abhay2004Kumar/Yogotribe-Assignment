import express from 'express';
import primeRoute from './routes/prime.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', primeRoute);

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);

});