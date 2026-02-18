import { Button } from '../components';

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-3xl sm:text-4xl leading-tight sm:leading-[68px] lg:max-w-md font-palanquin font-bold text-center lg:text-left'>
        Sign Up for <span className='text-coral-red'>Updates</span> &amp; Newsletter
      </h3>
      <div className='w-full lg:max-w-[40%] flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@udt.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
