import cloudinary from '../cloudinary.js';

export const createImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json(result);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Error creating image', error: error.message });
  }
};
