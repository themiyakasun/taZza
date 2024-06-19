import mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

export const CategoryModel = mongoose.model('Category', CategorySchema);
