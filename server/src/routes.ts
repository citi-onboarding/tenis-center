import express from 'express';
import UserController from '@controllers/UserController'
import ServiceController from '@controllers/ServiceController'
import ProjectController from '@controllers/ProjectController';

const routes = express.Router();
const userController = new UserController();
const serviceController = new ServiceController();
const projectController = new ProjectController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/service', serviceController.create);
routes.get('/service', serviceController.get);
routes.delete('/service/:id', serviceController.delete);
routes.put('/service/:id', serviceController.update);

routes.post('/project', projectController.create);
routes.get('/project', projectController.get);
routes.delete('/project:id', projectController.delete);
routes.put('/project:id', projectController.update);

export default routes;