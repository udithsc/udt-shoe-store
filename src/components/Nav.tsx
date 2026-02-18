import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Nav = () => {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <Link to='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </Link>

        {/* Desktop nav links */}
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

        {/* Desktop sign in */}
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <Link to='/'>Sign In</Link>
          <span>/</span>
          <Link to='/'>Explore now</Link>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className='hidden max-lg:flex gap-4 items-center'>
          <Link
            to='/cart'
            className='font-montserrat leading-normal text-lg font-bold text-coral-red'
          >
            Cart ({cartCount})
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
            className='focus:outline-none'
          >
            <img src={hamburger} alt='hamburger icon' width={25} height={25} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className='lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 py-6 px-8 flex flex-col gap-4'>
          {navLinks.map((link: { href: string; label: string }) => (
            <Link
              key={link.label}
              to={link.href}
              className='font-montserrat text-lg text-slate-gray py-2 border-b border-gray-100'
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className='flex gap-4 pt-2 font-montserrat text-lg font-medium'>
            <Link to='/' onClick={() => setMenuOpen(false)}>Sign In</Link>
            <span>/</span>
            <Link to='/' onClick={() => setMenuOpen(false)}>Explore now</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
