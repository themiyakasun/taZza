import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

const ProductList = () => {
  return (
    <div className='flex flex-wrap px-5'>
      {products.map((product) => (
        <div className='w-1/2 px-5 mb-5' key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
