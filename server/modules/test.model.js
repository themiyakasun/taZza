import mongoose from 'mongoose';

export const ImageSchema = new mongoose.Schema({
  url: { type: String, required: true },
});

export const ImageModel = mongoose.model('Product', ImageSchema);
