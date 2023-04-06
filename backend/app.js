import express from 'express';
import { router as placesRoutes } from './routes/places-routes.js';

const app = express();
const port = 5000;

app.use('/api/places', placesRoutes);

app.use((error, req, res, next) => {
  if(res.headersSent){
    next(error);
  }
  res.status(error.code || 500);
  res.json({message: error.message || 'An unknown error occurred'});
  // can also be written using chaining as res.status().json({})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});