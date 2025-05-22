import { Router } from "express";
import { createVakinha, deleteVakinha, deleteVakinhaAll, getAllVakinhas, getVakinhaId, getVakinhaImage } from "../Controllers/vakinhaController.js";
import upload from "../Middlewares/multer.js";

const vakinhaRouter = Router();

vakinhaRouter.post('/', upload.single('image'), createVakinha);

vakinhaRouter.get('/all', getAllVakinhas);
vakinhaRouter.get('/:id', getVakinhaId)
vakinhaRouter.get('/:id/image', getVakinhaImage);


vakinhaRouter.delete('/:id', deleteVakinha);
vakinhaRouter.delete('/all', deleteVakinhaAll)


export default vakinhaRouter;