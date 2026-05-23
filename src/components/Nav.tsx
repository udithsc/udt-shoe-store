'use client';

import { useState, useEffect } from 'react';
import { headerLogo, headerLogoDark } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Nav = () => {
  const { cartCount } = useCart();
  const { theme, isThemeReady, toggleTheme } = useTheme();
  const displayTheme = isThemeReady ? theme : 'light';
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? '/';
  const router = useRouter();

  // Add background to nav when scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep each route change anchored to the top of the page.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    router.push(href);
  };

  const isHome = pathname === '/';

  const navLinkClass = (isActive: boolean) =>
    `font-montserrat leading-normal text-lg transition-colors duration-200 relative group ${isActive
      ? 'text-coral-red font-semibold'
      : 'text-slate-gray dark:text-dark-muted hover:text-coral-red dark:hover:text-coral-red'
    }`;

  return (
    <header
      className={`padding-x py-5 fixed z-50 w-full top-0 transition-all duration-300 ${scrolled || menuOpen
        ? 'bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md shadow-sm'
        : isHome
          ? 'bg-transparent'
          : 'bg-white/95 dark:bg-dark-surface/95 backdrop-blur-md shadow-sm'
        }`}
    >
      <nav className='flex justify-between items-center max-container'>
        {/* Logo */}
        <Link href='/' className='flex-shrink-0'>
          <img
            src={displayTheme === 'dark' ? headerLogoDark : headerLogo}
            alt='UDT Shoes logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </Link>

        {/* Desktop nav links */}
        <ul className='flex-1 flex justify-center items-center gap-10 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={navLinkClass(link.href === '/' ? pathname === '/' : pathname.startsWith(link.href))}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-coral-red rounded-full transition-all duration-300 ${(link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href='/cart'
              className={`font-montserrat leading-normal text-lg font-bold transition-colors ${pathname === '/cart' ? 'text-coral-red' : 'text-coral-red hover:opacity-75'
                }`}
            >
              🛒 Cart ({cartCount})
            </Link>
          </li>
        </ul>

        {/* Desktop right: Sign In + Explore + Theme toggle */}
        <div className='flex gap-3 items-center text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <Link
            href='/signin'
            className='px-4 py-2 rounded-full border border-gray-200 dark:border-dark-border text-slate-gray dark:text-dark-muted hover:border-coral-red hover:text-coral-red dark:hover:text-coral-red transition-all text-sm font-semibold'
          >
            Sign In
          </Link>
          <Link
            href='/products'
            className='px-4 py-2 rounded-full bg-coral-red text-white text-sm font-semibold hover:opacity-90 transition-opacity'
          >
            Explore now
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${displayTheme === 'light' ? 'dark' : 'light'} mode`}
            className={`theme-toggle ${displayTheme === 'light' ? 'light-mode' : 'dark-mode'}`}
            title={`Switch to ${displayTheme === 'light' ? 'dark' : 'light'} mode`}
          >
            <span className='theme-toggle-thumb' suppressHydrationWarning>
              {displayTheme === 'light' ? '☀️' : '🌙'}
            </span>
          </button>
        </div>

        {/* Mobile: cart + theme toggle + hamburger */}
        <div className='hidden max-lg:flex gap-3 items-center'>
          <Link
            href='/cart'
            className='font-montserrat leading-normal text-base font-bold text-coral-red'
          >
            🛒 ({cartCount})
          </Link>

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${displayTheme === 'light' ? 'dark' : 'light'} mode`}
            className={`theme-toggle ${displayTheme === 'light' ? 'light-mode' : 'dark-mode'}`}
          >
            <span className='theme-toggle-thumb' suppressHydrationWarning>
              {displayTheme === 'light' ? '☀️' : '🌙'}
            </span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Toggle menu'
            className='focus:outline-none p-1'
          >
            <img src={hamburger} alt='menu' width={25} height={25} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className='pt-4 pb-6 px-2 flex flex-col gap-1'>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`w-full text-left font-montserrat text-lg py-3 px-4 rounded-xl transition-colors ${pathname === link.href
                ? 'text-coral-red bg-red-50 dark:bg-dark-card font-semibold'
                : 'text-slate-gray dark:text-dark-muted hover:text-coral-red hover:bg-gray-50 dark:hover:bg-dark-card'
                }`}
            >
              {link.label}
            </button>
          ))}
          <div className='border-t border-gray-100 dark:border-dark-border mt-3 pt-3 flex flex-col gap-2'>
            <button
              onClick={() => handleNavClick('/signin')}
              className='w-full text-left font-montserrat text-lg py-3 px-4 rounded-xl text-slate-gray dark:text-dark-muted hover:text-coral-red hover:bg-gray-50 dark:hover:bg-dark-card transition-colors'
            >
              Sign In
            </button>
            <button
              onClick={() => handleNavClick('/products')}
              className='w-full text-left font-montserrat text-lg py-3 px-4 rounded-xl bg-coral-red text-white font-semibold hover:opacity-90 transition-opacity'
            >
              Explore now →
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
