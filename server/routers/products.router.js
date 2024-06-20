import express from 'express';
import upload from '../multer.js';

import {
  getProducts,
  createProduct,
  getProductByCatId,
  productSearch,
} from '../controllers/products.controller.js';

const router = express.Router();

router.get('/', getProducts);

router.post('/', upload.single('image'), createProduct);

router.get('/:id', getProductByCatId);

router.get('/search/:key', productSearch);

export default router;
