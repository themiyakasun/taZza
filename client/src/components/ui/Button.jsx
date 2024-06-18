import React from 'react';
import { doubleArrow } from '../../assets';

const Button = ({ text, link, onclick }) => {
  return (
    <>
      {link ? (
        <a
          href={link}
          className='px-5 py-3 rounded-[40px] bg-primaryLinearRight bg-accent200 text-white font-bold flex items-center justify-center gap-5 max-w-[200px] capitalize'
        >
          {text}
          <img src={doubleArrow} alt='double-arrow' />
        </a>
      ) : (
        <button
          className='px-5 py-3 rounded-[40px] bg-primaryLinearRight bg-accent200 text-white font-bold flex items-center justify-center gap-5 max-w-[200px] capitalize'
          onClick={onclick}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
