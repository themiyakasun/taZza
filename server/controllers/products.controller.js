import { ProductModel } from '../modules/products.model.js';
import { CategoryModel } from '../modules/category.model.js';

export const getProducts = (req, res) => {
  ProductModel.find({})
    .populate('category_id')
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.error(err);
      const statusCode = err.name === 'MongoNetworkError' ? 500 : 400;
      res
        .status(statusCode)
        .json({ message: 'Error fetching products', error: err.message });
    });
};

const categoryGet = async (categoryId) => {
  return await CategoryModel.findById(categoryId);
};

export const createProduct = async (req, res) => {
  try {
    const category = await categoryGet(req.body.category_id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const product = new ProductModel({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      price: req.body.price,
      discount: req.body.discount,
      category_id: category._id,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error creating product', error: error.message });
  }
};

export const getProductByCatId = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await CategoryModel.findById(id);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    ProductModel.find({ category_id: id })
      .populate('category_id')
      .then((product) => {
        console.log(product);
        res.json(product);
      })
      .catch((err) =>
        res
          .status(400)
          .json({ message: 'Error fetching product', error: err.message })
      );
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error fetching product', error: error.message });
  }
};
