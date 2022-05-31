import express from 'express';
import PartnersController from '@controllers/PartnersController'

const routes = express.Router();
const partnersController = new PartnersController();

routes.post('/partners', partnersController.create);
routes.get('/partners', partnersController.get);
routes.delete('/partners/:id', partnersController.delete);
routes.put('/partners/:id', partnersController.update);


export default routes;