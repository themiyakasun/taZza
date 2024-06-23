import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchProducts = () => API.get('/products');
export const fetchProductById = (id) => API.get(`/products/${id}`);
export const fetchProductByCat = (category) =>
  API.get(`/products/category/${category}`);
export const fetchProductBySearch = (searchQuery) =>
  API.get(`/products/search/${searchQuery}`);

export const fetchCategories = () => API.get('/category');

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
