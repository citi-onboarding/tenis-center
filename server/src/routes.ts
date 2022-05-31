import express from 'express';
import PartnersController from '@controllers/PartnersControllers'

const routes = express.Router();
const PartnersController = new PartnersController ();

routes.post('/partners', PartnersController.create);
routes.get('/partners', PartnersController.get);
routes.delete('/partners/:id', PartnersController.delete);
routes.put('/partners/:id', PartnersController.update);


export default routes;