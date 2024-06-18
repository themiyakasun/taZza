import { food, girl } from '../../assets';

const About = () => {
  return (
    <div className='bg-[#F6FAF5] py-[120px]'>
      <div className='container'>
        <div className='flex flex-wrap justify-center'>
          <div className='flex flex-col gap-2 items-start w-full md:w-1/2 px-[15px]'>
            <div className='text-secondaryHeading text-primary font-semibold leading-none'>
              We Providing Services Since 1841 With Proud.
            </div>
            <div className='text-[22px] font-bold text-primary'>
              The readable content off a page when looking layout using Lorem
              Ipsum is that it has.
            </div>
            <div className='text-xl text-primary'>
              It is a long established fact that a reader will be distracted the
              readable content off a page when looking at its layout using Lorem
              Ipsum is that it has.
            </div>
            <div className='flex items-center gap-5'>
              <div className='flex items-center justify-center w-[102px] h-[102px] rounded-[100%] bg-secondary/20 p-5'>
                <img src={food} alt='food' />
              </div>
              <div className='text-[32px] text-primary font-semibold leading-none'>
                Fresh Look And 100% Organic Farm Fresh Produce Right.
              </div>
            </div>
          </div>
          <div className='flex flex-col w-full md:w-1/2 px-[15px]'>
            <img src={girl} alt='girl' className='w-full' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
