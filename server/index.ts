import app from './config/express';

app.listen(process.env.PORT, async () => {
  console.info(`Server is running at: ${process.env.PORT}`);
});