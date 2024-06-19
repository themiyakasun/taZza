import { useState } from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ service }) => {
  const [hover, setHover] = useState(null);

  const { id, title, icon } = service;
  return (
    <div
      className={`w-full ${
        hover === `hover${id}` ? 'bg-primary bg-serviceCard' : ''
      } bg-no-repeat flex flex-col items-center justify-center gap-3 py-32 transition-all duration-300 ease-in-out`}
      onMouseEnter={() => setHover(`hover${id}`)}
      onMouseLeave={() => setHover(null)}
    >
      <div className='w-[92px] h-[92px] rounded-full relative bg-secondary/20 flex items-center justify-center after:border-2 after:border-secondary/20 after:rounded-full after:p-5 after:w-[calc(100%+8px)] after:h-[calc(100%+8px)] after:absolute'>
        <img src={icon} alt={title} />
      </div>
      <div
        className={`${
          hover === `hover${id}` ? 'text-white' : 'text-primary'
        } text-3xl font-bold`}
      >
        {title}
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};
