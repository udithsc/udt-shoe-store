import { useState } from 'react';
import { Button, ShoeCard } from '../components';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import { Link } from 'react-router-dom';


const Hero = () => {
  const [bigShowImg, setBigShowImg] = useState(bigShoe1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full px-8 sm:px-16 xl:px-0 pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collection
        </p>
        <h1 className='mt-10 font-palanquin text-5xl sm:text-6xl xl:text-8xl max-sm:leading-[62px] sm:leading-[76px] xl:leading-[106px] font-bold dark:text-dark-text'>
          <span className='xl:bg-white dark:xl:bg-dark-bg xl:whitespace-nowrap relative z-10 pr-10 transition-colors duration-300'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>UDT</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray dark:text-dark-muted text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish UDT arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Link to='/products'>
          <Button label='Shop now' iconUrl={arrowRight} />
        </Link>


        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-8 sm:gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-3xl sm:text-4xl font-montserrat font-bold dark:text-dark-text'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray dark:text-dark-muted'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary dark:bg-dark-surface bg-hero bg-cover bg-center transition-colors duration-300'>
        <img
          src={bigShowImg}
          alt='show collection'
          width={610}
          height={502}
          className='object-contain relative z-10 w-full max-w-[610px] px-4 xl:px-0'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-4 flex-wrap justify-center sm:justify-start'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                imgUrl={image}
                changeBigShoeImage={(shoe) => setBigShowImg(shoe)}
                bigShowImg={bigShowImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
