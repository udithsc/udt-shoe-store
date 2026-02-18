import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';
import { Link } from 'react-router-dom';

// Map footer link names to internal routes where applicable
const internalRoutes: Record<string, string> = {
  'About us': '/about',
  'Air Jordan 1': '/product/udt-air-jordan-01',
  'Air Force 1': '/products',
  'Air Max 1': '/products',
  'Air Force 2': '/products',
  'UDT Waffle Racer': '/products',
  'UDT Cortez': '/products',
  'FAQs': '/contact',
  'How it works': '/about',
  'Privacy policy': '/contact',
  'Payment policy': '/contact',
};

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <Link to='/'>
            <img
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0'
            />
          </Link>
          <p className='mt-6 text-base text-white-400 leading-7 font-montserrat sm:max-w-sm'>
            Get shoes ready for the new term at your nearest UDT store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='bg-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-white text-2xl leading-normal font-medium mb-6'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => {
                  const internalHref = internalRoutes[link.name];
                  return (
                    <li
                      className='text-white-400 mt-3 font-montserrat text-base leading-normal hover:text-white transition-colors'
                      key={link.name}
                    >
                      {internalHref ? (
                        <Link to={internalHref}>{link.name}</Link>
                      ) : (
                        <a href={link.link}>{link.name}</a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <Link to='/contact' className='font-montserrat cursor-pointer hover:text-white transition-colors'>
          Terms &amp; Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
