import express from 'express';
import * as usersControllers from '../controllers/users-controllers.js';

export const router = express.Router();

router.get('/', usersControllers.getUsers);

router.post('/signup', usersControllers.signup);

router.post('/login', usersControllers.login);

