import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import path from 'path';

import employeeRouter from '../employee/employee-router';

dotenv.config({ 
  path: path.resolve(__dirname, `./env/${process.env.ENVIRONMENT}.env`)
});

const app = express();

app.use(cors());
app.use(express.json());

app.use('/employees', employeeRouter);

export default app;
