import * as express from 'express';
import { Request, Response, NextFunction } from "express";
import { ExpressFlowerRouter } from './lib/Catalogo/infrastructure/ExpressFlowerRouter';

const app = express();

app.use(express.json());

app.use(ExpressFlowerRouter);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        console.error(err.stack);
        return res.status(500).json({ message: err.message });
    }
    console.error(err);
    return res.status(500).json({ message: "Ocurre un error" });
});

app.listen(3000, () => {
    console.log("Server esta corriendo en http://localhost:3000");
});