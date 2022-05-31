import express from 'express';
import PartnersController from '@controllers/PartnersController'

const routes = express.Router();
const partnersController = new PartnersController();

routes.post('/partners', partnersController.create);
routes.get('/partners', partnersController.get);
routes.delete('/partners/:id', partnersController.delete);
routes.put('/partners/:id', partnersController.update);
import UserController from '@controllers/UserController'

const userController = new UserController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);


export default routes;