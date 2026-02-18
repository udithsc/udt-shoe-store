import { useState } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Nav = () => {
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();
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
                className='font-montserrat leading-normal text-lg text-slate-gray dark:text-dark-muted hover:text-coral-red dark:hover:text-coral-red transition-colors'
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

        {/* Desktop right side: sign in + theme toggle */}
        <div className='flex gap-4 items-center text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <Link to='/' className='dark:text-dark-text hover:text-coral-red dark:hover:text-coral-red transition-colors'>Sign In</Link>
          <span className='dark:text-dark-muted'>/</span>
          <Link to='/' className='dark:text-dark-text hover:text-coral-red dark:hover:text-coral-red transition-colors'>Explore now</Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className={`theme-toggle ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className='theme-toggle-thumb'>
              {theme === 'light' ? '☀️' : '🌙'}
            </span>
          </button>
        </div>

        {/* Mobile: cart + theme toggle + hamburger */}
        <div className='hidden max-lg:flex gap-3 items-center'>
          <Link
            to='/cart'
            className='font-montserrat leading-normal text-lg font-bold text-coral-red'
          >
            Cart ({cartCount})
          </Link>

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className={`theme-toggle ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}
          >
            <span className='theme-toggle-thumb'>
              {theme === 'light' ? '☀️' : '🌙'}
            </span>
          </button>

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
        <div className='lg:hidden absolute top-full left-0 w-full bg-white dark:bg-dark-surface shadow-lg z-50 py-6 px-8 flex flex-col gap-4 transition-colors'>
          {navLinks.map((link: { href: string; label: string }) => (
            <Link
              key={link.label}
              to={link.href}
              className='font-montserrat text-lg text-slate-gray dark:text-dark-muted py-2 border-b border-gray-100 dark:border-dark-border'
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className='flex gap-4 pt-2 font-montserrat text-lg font-medium dark:text-dark-text'>
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
