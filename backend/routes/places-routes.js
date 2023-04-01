import express from 'express';

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
        const error = new Error('Could not find a place for the provided id.');
        error.code = 404;
        throw error; 
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
        const error = new Error('Could not find a place for the provided user id.');
        error.code = 404;
        return next(error);
    }

    res.json({place});
});