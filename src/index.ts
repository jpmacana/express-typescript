import express from 'express'
import rutas from './routes/diaries'

const app = express();
app.use(express.json());



const PORT = 3000;

app.get('/api', (_req, res) => {
  console.log('Someone pinged here' + ' ' + new Date().toLocaleDateString());
  res.send('Pong!!');
});

app.use('/api/diaries', rutas);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

