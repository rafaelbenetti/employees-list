import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import path from 'path';

import employeeRouter from '../employee/employee-router';

dotenv.config({
  path: path.resolve('/usr/src/app/config/env/', `${process.env.NODE_ENV}.env`)
});

const app = express();

app.use(cors());
app.use(express.json());

app.use('/employees', employeeRouter);

export default app;
