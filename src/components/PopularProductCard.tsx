import { Link } from 'react-router-dom';
import { star } from '../assets/icons';
export interface Product {
  imgURL: string;
  name: string;
  price: string;
  slug: string;
}
interface PopularProductCard {
  product: Product;
}

const PopularProductCard = ({
  product: { imgURL, name, price, slug },
}: PopularProductCard) => {
  return (
    <Link
      to={`/product/${slug}`}
      className='flex flex-1 flex-col w-full max-sm:w-full cursor-pointer'
    >
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </Link>
  );
};

export default PopularProductCard;
