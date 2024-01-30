import multer from 'multer';
import { Router } from 'express';

import imageController from '../controllers/ImageController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/', upload.single('foto'), imageController.store);

export default router;
