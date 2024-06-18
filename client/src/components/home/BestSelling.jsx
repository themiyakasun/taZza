import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

const BestSelling = () => {
  return (
    <div className='container py-[120px]'>
      <div className='text-center text-subHeading font-bold text-primary'>
        Our Best Selling Products
      </div>
      <div className='text-center text-xl text-accent100'>
        The passage experienced a surge in popularity during the 1960s when
        <br />
        again during the 90s as desktop publishers
      </div>

      <div className='flex flex-wrap mt-5 '>
        {products.slice(0, 8).map((product) => (
          <div className='w-full md:w-1/2 lg:w-1/4 px-[5px]' key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
