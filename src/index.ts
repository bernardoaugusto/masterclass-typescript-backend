import express from 'express';
import routes from './routes';

const app = express();

function getUserName(): string {
  return '3';
}

app.use(routes);

app.listen(3333);