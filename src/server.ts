import express from 'express';
import cors from 'cors';
import { routes } from './routes';
import { env } from 'process';

const app = express();

app.use(cors({
  origin: env.FRONTEND_URL
}));
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('HTTP server running');
});