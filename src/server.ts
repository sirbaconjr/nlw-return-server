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

const port = env.SERVER_PORT || 3333;

app.listen(port, () => {
  console.log(`HTTP server running on port ${port}`);
});