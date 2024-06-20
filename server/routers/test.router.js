import express from 'express';
import upload from '../multer.js';

import { createImage } from '../controllers/test.controller.js';
const router = express.Router();

router.post('/', upload.single('image'), createImage);

export default router;
