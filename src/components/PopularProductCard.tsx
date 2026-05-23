import Link from 'next/link';
import { star } from '../assets/icons';
export interface Product {
  imgURL: string;
  name: string;
  price: string;
  slug: string;
  description?: string;
  category?: string;
  stock?: number;
  sizes?: number[];
}
interface PopularProductCard {
  product: Product;
}

const PopularProductCard = ({
  product: { imgURL, name, price, slug, category, stock },
}: PopularProductCard) => {
  return (
    <Link
      href={`/product/${slug}`}
      className='group flex h-full w-full flex-col rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-dark-border dark:bg-dark-card'
    >
      <div className='flex aspect-square w-full items-center justify-center rounded-xl bg-pale-blue dark:bg-dark-surface'>
        <img
          src={imgURL}
          alt={name}
          className='h-full max-h-[260px] w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='mt-5 flex items-center justify-between gap-3'>
        <span className='rounded-full bg-red-50 px-3 py-1 font-montserrat text-xs font-semibold text-coral-red dark:bg-dark-surface'>
          {category || 'Shoes'}
        </span>
        {typeof stock === 'number' && (
          <span className='font-montserrat text-xs font-semibold text-slate-gray dark:text-dark-muted'>
            {stock > 0 ? `${stock} left` : 'Sold out'}
          </span>
        )}
      </div>
      <div className='mt-4 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray dark:text-dark-muted'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 min-h-[64px] text-2xl leading-tight font-semibold font-palanquin dark:text-dark-text'>
        {name}
      </h3>
      <p className='mt-auto pt-4 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
        {price}
      </p>
    </Link>
  );
};

export default PopularProductCard;
