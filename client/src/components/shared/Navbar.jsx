import { useState } from 'react';

import { navLeft, navRight, logo, cart, menu, user } from '../../assets';

const Navbar = () => {
  const [linkHover, setLinkHover] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-20'>
        <div className='container mt-3'>
          <div className='relative bg-primary py-3 h-[78px]'>
            <div className='hidden md:block absolute -left-[6%] top-0'>
              <img src={navLeft} alt='nav-left' className='w-full h-full' />
            </div>
            <div className='hidden md:block absolute -right-[5%] top-0'>
              <img src={navRight} alt='nav-right' className='w-full h-full' />
            </div>

            <div className='flex items-center justify-between'>
              <a href='/'>
                <img src={logo} alt='logo' className='w-[80px] pl-5' />
              </a>

              <ul className='hidden md:flex items-center gap-5' role='list'>
                <li>
                  <a
                    href='/'
                    className={`relative flex justify-center items-center px-5 z-10 text-white font-semibold before:contents-[""] before:bg-hover before:bg-center before:bg-cover ${
                      linkHover === 'hover1'
                        ? 'before:w-20 before:h-5'
                        : 'before:w-0 h-0'
                    } before:absolute before:top-0 before:-z-[1] before:rounded-[5px] before:transition-all before:duration-300 before:ease-in-out`}
                    onMouseEnter={() => setLinkHover('hover1')}
                    onMouseLeave={() => setLinkHover(null)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href=''
                    className={`relative flex justify-center items-center px-5 z-10 text-white font-semibold before:contents-[""] before:bg-hover before:bg-center before:bg-cover ${
                      linkHover === 'hover2'
                        ? 'before:w-20 before:h-5'
                        : 'before:w-0 h-0'
                    } before:absolute before:top-0 before:-z-[1] before:rounded-[5px] before:transition-all before:duration-300 before:ease-in-out`}
                    onMouseEnter={() => setLinkHover('hover2')}
                    onMouseLeave={() => setLinkHover(null)}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href='/products'
                    className={`relative flex justify-center items-center px-5 z-10 text-white font-semibold before:contents-[""] before:bg-hover before:bg-center before:bg-cover ${
                      linkHover === 'hover3'
                        ? 'before:w-20 before:h-5'
                        : 'before:w-0 h-0'
                    } before:absolute before:top-0 before:-z-[1] before:rounded-[5px] before:transition-all before:duration-300 before:ease-in-out`}
                    onMouseEnter={() => setLinkHover('hover3')}
                    onMouseLeave={() => setLinkHover(null)}
                  >
                    Products
                  </a>
                </li>
              </ul>

              <div className='flex gap-5 pr-5'>
                <div className='hidden md:flex flex-col items-end'>
                  <div className='text-secondary font-bold'>Call Us!</div>
                  <div className='text-white text-xl font-bold'>
                    +00 569 846 348
                  </div>
                </div>

                <a
                  href='/cart'
                  className='relative bg-accent300 flex items-center justify-center rounded-full p-3'
                >
                  <img src={cart} alt='cart' className='w-8' />
                  <div className='absolute -top-1 -right-1 bg-secondary text-white font-bold text-xs w-5 h-5 flex justify-center items-center rounded-full'>
                    0
                  </div>
                </a>
                <button
                  className='relative bg-accent300 flex md:hidden items-center justify-center rounded-full p-3'
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <img src={menu} alt='menu' />
                </button>
                <a
                  href='/auth'
                  className='relative bg-accent300 flex items-center justify-center rounded-full p-3'
                >
                  <img src={user} alt='user' className='w-8' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='fixed top-[10%] left-0 right-0'>
        <div className='container'>
          <div
            className={`w-full ${
              menuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'
            } transition-all duration-300 ease-in-out py-5 bg-primary`}
          >
            <ul className='flex flex-col justify-center items-center gap-5 '>
              <li>
                <a href='/' className='text-white text-xl font-bold'>
                  Home
                </a>
              </li>
              <li>
                <a href='' className='text-white text-xl font-bold'>
                  About
                </a>
              </li>
              <li>
                <a href='/products' className='text-white text-xl font-bold'>
                  Product
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
