import { Router } from "express";
import multer from "multer";
import { createVakinha, deleteVakinha, getAllVakinhas, getVakinhaId, getVakinhaImage } from "../Controllers/vakinhaController.js";

const vakinhaRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

vakinhaRouter.get('/all', getAllVakinhas);
vakinhaRouter.get('/:id', getVakinhaId)
vakinhaRouter.get('/:id/image', getVakinhaImage);

vakinhaRouter.post('/', upload.single('image'), createVakinha);

vakinhaRouter.delete('/', deleteVakinha);


export default vakinhaRouter;