import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  return (
    <div className='py-[120px] container'>
      <div className='flex justify-between flex-wrap'>
        {services.map((service) => (
          <div className='w-full md:w-1/4  px-[15px]' key={service.id}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
