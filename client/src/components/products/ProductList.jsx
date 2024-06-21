import { useState, useEffect } from 'react';
import { useStore } from '../../stores/store';
import ProductCard from '../ui/ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const selectedCategory = useStore((state) => state.selectedCategory);
  const productSearchKey = useStore((state) => state.productSearchKey);

  useEffect(() => {
    let url = 'http://localhost:5000/products';

    if (productSearchKey !== '') {
      url = `http://localhost:5000/products/search/${productSearchKey}`;
    } else if (selectedCategory !== 'all') {
      url = `http://localhost:5000/products/${selectedCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [selectedCategory, productSearchKey]);

  return (
    <div className='flex flex-wrap px-5 w-full'>
      {products.map((product) => (
        <div className='w-1/2 px-5 mb-5' key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
