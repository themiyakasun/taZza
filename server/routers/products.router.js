import express from 'express';
import upload from '../multer.js';

import {
  getProducts,
  createProduct,
  getProductByCatId,
} from '../controllers/products.controller.js';

const router = express.Router();

router.get('/', getProducts);

router.post('/', createProduct);

router.get('/:id', getProductByCatId);

export default router;
