import { search, arrowRight } from '../../assets';
import { categories } from '../../data/categories';

const Sidebar = () => {
  return (
    <div className='w-[300px] flex flex-col gap-20'>
      <div className='w-full flex items-center'>
        <input
          type='text'
          placeholder='Search products'
          className='w-full border border-gray-300 p-2 rounded-bl-md rounded-tl-md outline-none'
        />
        <button className='w-[65px] h-full bg-primaryLinearRight rounded-tr-md rounded-br-md flex items-center justify-center'>
          <img src={search} alt='search' />
        </button>
      </div>

      <div className='border-2 border-secondary/20 p-5'>
        <div className='text-miniHeading text-primary font-bold'>
          Categories
        </div>

        <div className='flex flex-col mt-5'>
          {categories.map((category) => (
            <div
              className='flex items-center gap-5 py-[15px] px-5 border-2 border-secondary/20 cursor-pointer hover:bg-secondary/10 transition-all duration-300 ease-in-out'
              key={category.id}
            >
              <img src={arrowRight} alt='arrow right' />
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
