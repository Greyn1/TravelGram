import { v4 as uuidv4 } from 'uuid';
import HttpError from '../models/http-error.js';

const DUMMY_USERS = [
    {
        id:'u1',
        name: 'Dherya',
        email: 'test@test.com',
        password: 'test'
    }
]

export const getUsers = (req, res, next) => {
    res.json({users: DUMMY_USERS});
}

export const signup = (req, res, next) => {
    const {name, email, password} = req.body;

    const hasUser = DUMMY_USERS.find(u => u.email === email);
    if(hasUser){
        throw new HttpError('Could not create new user, email already exists.', 422);
    }

    const createdUser = {
        id: uuidv4(),
        name, 
        email,
        password
    };
    DUMMY_USERS.push(createdUser);

    res.status(201).json({user: createdUser});
}

export const login = (req, res, next) => {
    const {email, password} = req.body;
    const identifiedUser = DUMMY_USERS.find(u => u.email === email);
    if(!identifiedUser || identifiedUser.password !== password){
        throw new HttpError('Check your credentials again, could not identify the user.', 401);
    }

    res.json({message: 'Logged in'});
}