import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';

import employeeRouter from '../employee/employee-router';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/employees', employeeRouter);

export default app;
