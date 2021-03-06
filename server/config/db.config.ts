import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve('/usr/src/app/config/env/', `${process.env.NODE_ENV}.env`)
});

let database: mongoose.Connection;

export const connect = () => {
  
  const url: string = `${process.env.DB_CONNECTION_STRING}`;
  if (database) {
    return;
  }

  mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = mongoose.connection;

  database.once('open', async () => {
    console.log(`Connected to database: ${url}`);
  });

  database.on('error', () => {
    console.log('Error connecting to database');
  });
};

export const disconnect = () => {

  if (!database) {
    return;
  }

  mongoose.disconnect();

  database.once('close', async () => {
    console.log('Diconnected to database');
  });
};
