import Button from '../ui/Button';
import { banner1, banner } from '../../assets';

const Header = () => {
  return (
    <div className='h-screen bg-[#C4C4C4] relative'>
      <img src={banner1} alt='banner 1' className='absolute top-0 -left-[5%]' />

      <div className='absolute top-[45%] -translate-x-[30%] left-[30%] -translate-y-1/2 max-w-[32%]'>
        <div className='flex flex-col'>
          <div className='text-mainHeading font-bold text-primary'>
            100% Organic
          </div>
          <div className='text-secondaryHeading font-semibold text-white bg-primary'>
            Fresh & Natural Farm Food
          </div>
          <div className='text-primary text-2xl font-medium my-5'>
            The readable content of a page when looking at its layout point of
            using of letters, as opposed.
          </div>
          <Button text='All Products' link='/products' />
        </div>
      </div>

      <img
        src={banner}
        alt='banner'
        className='absolute left-1/2 -translate-x-1/2 bottom-0 z-10'
      />
    </div>
  );
};

export default Header;
