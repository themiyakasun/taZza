import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import {
  getProducts,
  getProductBySearch,
  getProductsByCat,
} from '../../actions/products';
import { useStore } from '../../stores/store.js';
import ProductCard from '../ui/ProductCard';

const ProductList = () => {
  const dispatch = useDispatch();

  const selectedCategory = useStore((state) => state.selectedCategory);
  const productSearchKey = useStore((state) => state.productSearchKey);

  useEffect(() => {
    if (selectedCategory !== 'all' && selectedCategory) {
      dispatch(getProductsByCat(selectedCategory));
    } else if (productSearchKey) {
      dispatch(getProductBySearch(productSearchKey));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, selectedCategory, productSearchKey]);

  const products = useSelector((products) => products.products);

  return (
    <div className='flex flex-wrap px-5 w-full'>
      {products.map((product) => (
        <div className='w-1/2 px-5 mb-5' key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
