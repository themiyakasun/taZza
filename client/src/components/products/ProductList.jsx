import { useState, useEffect } from 'react';
import { useStore } from '../../stores/store';
import ProductCard from '../ui/ProductCard';

const ProductList = () => {
  const selectedCategory = useStore((state) => state.selectedCategory);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory === 'all') {
      fetch('http://localhost:5000/products')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    } else {
      fetch(`http://localhost:5000/products/${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }
  }, [selectedCategory]);

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
