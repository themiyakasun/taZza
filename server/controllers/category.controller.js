import { CategoryModel } from '../modules/category.model.js';

export const getCategories = (req, res) => {
  CategoryModel.find({})
    .then((categories) => {
      res.json(categories);
    })
    .catch((err) => {
      console.error(err);
      const statusCode = err.name === 'MongoNetworkError' ? 500 : 400;
      res
        .status(statusCode)
        .json({ message: 'Error fetching categories', error: err.message });
    });
};

export const createCategory = (req, res) => {
  const category = new CategoryModel({
    name: req.body.name,
  });

  category
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(400)
        .json({ message: 'Error creating category', error: err.message });
    });
};
