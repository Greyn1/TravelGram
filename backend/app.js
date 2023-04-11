import express from 'express';
import HttpError from './models/http-error.js';
import { router as placesRoutes } from './routes/places-routes.js';

const app = express();
const port = 5000;

app.use(express.json());

app.use('/api/places', placesRoutes);

// middleware to handle unsupported routes
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
})

//error handling for no such userId or placeId
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