import { HeaderHalf, ProductList, Sidebar } from '../components';

const Products = () => {
  return (
    <div>
      <HeaderHalf />

      <div className='container mt-[120px]'>
        <div className='flex'>
          <Sidebar />
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Products;
