import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import productRoutes from './routers/products.router.js';
import categoryRoutes from './routers/category.router.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/products', productRoutes);
app.use('/category', categoryRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose
  .connect(process.env.DB_URL)
  .then((result) => {
    const port = process.env.PORT || 5002;
    app.listen(port);
    console.log(`Connected to PORT http://localhost:${port} `);
  })
  .catch((err) => {
    console.log(err);
  });
