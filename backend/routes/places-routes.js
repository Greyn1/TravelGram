import express from 'express';
import * as placesControllers from '../controllers/places-controllers.js';

export const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlaceByUserId);
