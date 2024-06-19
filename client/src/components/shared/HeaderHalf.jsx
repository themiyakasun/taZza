import Button from '../ui/Button';
import { banner1 } from '../../assets';

const Header = () => {
  let path = window.location.pathname;
  let page;
  switch (path) {
    case '/':
      page = 'Home';
      break;
    case '/products':
      page = 'Products';
      break;
    case '/product-details':
      page = 'Product Details';
      break;
    default:
      page = 'Home';
  }
  return (
    <div className='h-[500px] bg-[#C4C4C4] relative'>
      <img src={banner1} alt='banner 1' className='absolute top-0 -left-[5%]' />

      <div className='absolute top-[45%] -translate-x-[30%] left-[30%] -translate-y-1/2 max-w-[32%]'>
        <div className='flex flex-col'>
          <div className='text-mainHeading font-bold text-primary'>
            {page} Page
          </div>
          <Button text={`Home - ${page}`} />
        </div>
      </div>
    </div>
  );
};

export default Header;
