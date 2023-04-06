import express from 'express';
import HttpError from '../models/http-error';

export const router = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Taj Mahal',
        address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001',
        description: 'One of the 7 wonders of the world',
        creatorId: 'u1',
        location: {
            lat: 27.1751448,
            lng: 77.9020665
        }
    }
];

router.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find((p) => {
        return p.id === placeId;
    });

    if(!place){
        throw new HttpError('Could not find a place for the provided id.', 404);
       /*  using throw is fine for synchronous execution but not for async.
        for async use next(error) which should be the preffered way.
        throw cancels the function execution so no need to use return with throw. */
    }
    res.json({place});
});

router.get('/user/:uid', (req, res, next) => {
    const userId = req.params.uid;
    const place = DUMMY_PLACES.find((p) => {
        return p.creatorId === userId;
    });

    if(!place){
        return next(
            new HttpError('Could not find a place for the provided user id.', 404)
        );
    }
    res.json({place});
});
