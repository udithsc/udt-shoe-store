import { shoe8 } from '../assets/images';
import { Button } from '../components';

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold dark:text-dark-text'>
          We Provide<span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text dark:text-dark-muted'>
          Every pair goes through proper QC before it ships. We use materials
          that hold up — not just on day one, but after months of actual use.
        </p>
        <p className='mt-6 lg:max-w-lg info-text dark:text-dark-muted'>
          Comfort and durability aren't trade-offs here. We work on both.
        </p>
        <div className='mt-11'>
          <Button label='View Details' />
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
