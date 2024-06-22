import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { search, arrowRight } from '../../assets';
import { useStore } from '../../stores/store';
import { getCategories } from '../../actions/categories';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const setSelectedCategory = useStore((state) => state.setSelectedCategory);
  const setProductSearchKey = useStore((state) => state.setProductSearchKey);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCategorySelect = (e, id) => {
    e.preventDefault();
    setSelectedCategory(id);
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories);

  return (
    <div className='w-[300px] flex flex-col gap-20'>
      <div className='w-full flex items-center'>
        <input
          type='text'
          placeholder='Search products'
          value={inputValue}
          onChange={handleInputChange}
          className='w-full border border-gray-300 p-2 rounded-bl-md rounded-tl-md outline-none'
        />
        <button
          className='w-[65px] h-full bg-primaryLinearRight rounded-tr-md rounded-br-md flex items-center justify-center'
          onClick={() => setProductSearchKey(inputValue)}
        >
          <img src={search} alt='search' />
        </button>
      </div>

      <div className='border-2 border-secondary/20 p-5'>
        <div className='text-miniHeading text-primary font-bold'>
          Categories
        </div>

        <div className='flex flex-col mt-5'>
          {categories.map((category) => (
            <button
              className='flex items-center gap-5 py-[15px] px-5 border-2 border-secondary/20 cursor-pointer hover:bg-secondary/10 transition-all duration-300 ease-in-out'
              key={category._id}
              onClick={(e) => handleCategorySelect(e, category._id)}
            >
              <img src={arrowRight} alt='arrow right' />
              <div>{category.name} </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
