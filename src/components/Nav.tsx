import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Nav = () => {
  const { cartCount } = useCart();

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <Link to='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-o w-[129px] h-[29px]'
          />
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link: { href: string; label: string }) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to='/cart'
              className='font-montserrat leading-normal text-lg font-bold text-coral-red'
            >
              Cart ({cartCount})
            </Link>
          </li>
        </ul>
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <Link to='/'> Sign In</Link>
          <span>/</span>
          <Link to='/'>Explore now</Link>
        </div>
        <div className='hidden max-lg:flex gap-4 items-center'>
          <Link
            to='/cart'
            className='font-montserrat leading-normal text-lg font-bold text-coral-red'
          >
            Cart ({cartCount})
          </Link>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
