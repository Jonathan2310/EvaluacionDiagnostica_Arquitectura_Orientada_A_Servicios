import { Router } from 'express';
import { ExpressFlowerController } from './ExpressFlowerController';

const controller = new ExpressFlowerController();

const ExpressFlowerRouter = Router();

ExpressFlowerRouter.get("/flowers/", controller.getAll);
ExpressFlowerRouter.get("/flowers/:id/", controller.getById);
ExpressFlowerRouter.post("/flowers/", controller.create);
ExpressFlowerRouter.put("/flowers/", controller.edit);
ExpressFlowerRouter.delete("/flowers/:id", controller.delete);

export { ExpressFlowerRouter };