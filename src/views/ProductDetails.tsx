'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '../constants';
import { Nav, Button, PopularProductCard } from '../components';
import { Footer } from '../sections';
import { star, arrowRight } from '../assets/icons';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ProductDetails = () => {
    const params = useParams<{ slug: string }>();
    const slug = params?.slug;
    const { addToCart } = useCart();
    const product = products.find((p) => p.slug === slug);
    const [selectedSize, setSelectedSize] = useState<number | null>(product?.sizes?.[0] ?? null);

    if (!product) {
        return (
            <div className='min-h-screen flex flex-col justify-center items-center px-8 text-center bg-white dark:bg-dark-bg transition-colors duration-300'>
                <h1 className='text-3xl sm:text-4xl font-palanquin font-bold dark:text-dark-text'>Product Not Found</h1>
                <p className='mt-4 font-montserrat text-lg text-slate-gray dark:text-dark-muted'>
                    The product you are looking for does not exist.
                </p>
                <div className='mt-10'>
                    <Link href='/'>
                        <Button label='Back to Home' iconUrl={arrowRight} />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className='relative bg-white dark:bg-dark-bg transition-colors duration-300'>
            <Nav />
            <section className='padding-x py-10 w-full'>
                <div className='max-container flex flex-col lg:flex-row justify-between items-center gap-10 w-full pt-28'>
                    <div className='flex-1 flex justify-center items-center w-full'>
                        <img
                            src={product.imgURL}
                            alt={product.name}
                            width={570}
                            height={522}
                            className='object-contain w-full max-w-[570px] rounded-3xl bg-pale-blue p-6 dark:bg-dark-surface'
                        />
                    </div>
                    <div className='flex flex-1 flex-col w-full'>
                        <p className='mb-3 font-montserrat text-sm font-semibold uppercase tracking-wide text-coral-red'>
                            {product.category}
                        </p>
                        <h2 className='font-palanquin text-3xl sm:text-4xl capitalize font-bold lg:max-w-lg dark:text-dark-text'>
                            {product.name}
                        </h2>
                        <div className='mt-6 flex justify-start gap-2.5 items-center'>
                            <img src={star} alt='rating' width={24} height={24} />
                            <p className='font-montserrat text-xl leading-normal text-slate-gray dark:text-dark-muted'>
                                (4.5)
                            </p>
                        </div>
                        <p className='mt-4 font-montserrat text-slate-gray dark:text-dark-muted text-lg leading-7'>
                            {product.description ||
                                'Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value'}
                        </p>
                        <p className='mt-6 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
                            {product.price}
                        </p>
                        <div className='mt-8'>
                            <p className='font-montserrat font-semibold dark:text-dark-text'>Select size</p>
                            <div className='mt-3 flex flex-wrap gap-3'>
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        type='button'
                                        onClick={() => setSelectedSize(size)}
                                        className={`h-12 w-12 rounded-full border font-montserrat font-semibold transition-colors ${selectedSize === size
                                            ? 'border-coral-red bg-coral-red text-white'
                                            : 'border-gray-200 text-slate-gray hover:border-coral-red hover:text-coral-red dark:border-dark-border dark:text-dark-muted'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <p className='mt-5 font-montserrat text-sm text-slate-gray dark:text-dark-muted'>
                            {product.stock > 0 ? `${product.stock} pairs available` : 'Sold out'}
                        </p>

                        <div className='mt-10 flex flex-wrap gap-4'>
                            <Button
                                label='Add to cart'
                                iconUrl={arrowRight}
                                type='button'
                                disabled={product.stock <= 0 || selectedSize === null}
                                onClick={() => addToCart(product)}
                            />
                            <Link
                                href='/cart'
                                className='flex items-center justify-center rounded-full border border-slate-gray px-7 py-4 font-montserrat text-lg leading-none text-slate-gray transition-colors hover:border-coral-red hover:text-coral-red dark:border-dark-border dark:text-dark-muted'
                            >
                                View cart
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='padding mt-16 max-container'>
                <h3 className='font-palanquin text-2xl sm:text-3xl font-bold mb-6 dark:text-dark-text'>Similar Products</h3>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    {products.filter((p) => p.slug !== slug).slice(0, 4).map((product) => (
                        <PopularProductCard key={product.name} product={product} />
                    ))}
                </div>
            </section>
            <section className='padding-x padding-t pb-8 bg-black dark:bg-dark-surface mt-10 transition-colors duration-300'>
                <Footer />
            </section>
        </main>
    );
};

export default ProductDetails;
