import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
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
    console.log('Connected to database');
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
