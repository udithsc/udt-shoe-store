import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import { Button } from '../components';
import { Link } from 'react-router-dom';


const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img
          src={offer}
          alt='show promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold dark:text-dark-text'>
          <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className='mt-4 info-text dark:text-dark-muted'>
          We run regular promotions across the full range — no loyalty points,
          no hoops to jump through. Just straightforward discounts on shoes
          worth buying.
        </p>
        <p className='mt-6 info-text dark:text-dark-muted'>
          Stock moves fast on sale items. If something catches your eye,
          it's worth grabbing sooner rather than later.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Link to='/products'>
            <Button label='Shop Now' iconUrl={arrowRight} />
          </Link>
          <Link to='/about'>
            <Button
              label='Learn more'
              backgroundColor='bg-white dark:bg-dark-card'
              borderColor='border-slate-gray'
              textColor='text-slate-gray dark:text-dark-muted'
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
