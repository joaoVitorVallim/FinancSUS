import { Router } from 'express';
import { search } from '../Controllers/searchController.js';

const searchRouter = Router();

searchRouter.get('', search);

export default searchRouter;