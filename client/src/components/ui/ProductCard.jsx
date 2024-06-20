import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../ui/Button';
import { eye, heart } from '../../assets';

const ProductCard = ({ product }) => {
  const [hover, setHover] = useState(null);
  const { _id, name, price, discount, image, quantity } = product;

  return (
    <div
      className='w-full relative border-2 border-secondary/20 p-2'
      onMouseEnter={() => setHover(`hover${_id}`)}
      onMouseLeave={() => setHover(null)}
    >
      <img
        src={`/assets/products/${image}`}
        alt={name}
        className='w-[223px] h-[167px]'
      />

      <div className='mt-2 flex flex-col gap-2'>
        <div
          className={`text-miniHeading ${
            hover === `hover${_id}` ? 'text-white' : 'text-primary'
          } font-semibold z-10`}
        >
          {name}
        </div>
        <div className='flex justify-between items-center z-10'>
          <div className='flex gap-3 items-center'>
            {discount > 0 ? (
              <>
                <div className='text-accent100 font-bold line-through'>
                  ${price} KG
                </div>
                <div className='text-accent100 font-bold'>
                  ${price - (price * discount) / 100} KG
                </div>
              </>
            ) : (
              <div className='text-accent100 font-bold'>${price} KG</div>
            )}

            <Button text='Add To Cart' />
          </div>
        </div>
      </div>

      {quantity <= 0 && (
        <div className='bg-[#FF4800] text-white text-[11px] px-2 py-1 rounded-[20px] w-[50px] flex items-center justify-center absolute top-0 right-[15px]'>
          Sold Out
        </div>
      )}

      {hover === `hover${_id}` && (
        <div className='w-full h-full bg-primary/90 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-5 transition-all duration-300 ease-in-out'>
          <button className='w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center'>
            <img src={eye} alt='preview' />
          </button>
          <button className='w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center'>
            <img src={heart} alt='wishlist' />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
