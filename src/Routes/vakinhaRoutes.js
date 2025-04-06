import { Router } from "express";
const vakinhaRouter = Router();
import { createVakinha, deleteVakinha, getAllVakinhas, getVakinhaId } from "../Controllers/vakinhaController.js";

vakinhaRouter.get('/all', getAllVakinhas);
vakinhaRouter.get('/:id', getVakinhaId)

vakinhaRouter.post('/', createVakinha);

vakinhaRouter.delete('/', deleteVakinha);


export default vakinhaRouter;