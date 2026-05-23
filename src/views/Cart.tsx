'use client';

import { useCart } from '../context/CartContext';
import { Button, Nav } from '../components';
import Link from 'next/link';
import { Footer } from '../sections';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <main className='relative bg-white dark:bg-dark-bg transition-colors duration-300'>
                <Nav />
                <section className='padding-x py-10 w-full min-h-screen flex flex-col justify-center items-center pt-28'>
                    <h2 className='text-3xl font-palanquin font-bold text-center dark:text-dark-text'>Your Cart is Empty</h2>
                    <Link href='/' className='mt-5'>
                        <Button label='Start Shopping' />
                    </Link>
                </section>
                <section className='padding-x padding-t pb-8 bg-black dark:bg-dark-surface mt-10 transition-colors duration-300'>
                    <Footer />
                </section>
            </main>
        );
    }

    return (
        <main className='relative bg-white dark:bg-dark-bg transition-colors duration-300'>
            <Nav />
                <section className='padding-x py-10 w-full min-h-screen pt-28'>
                <div className='max-container'>
                <h2 className='text-2xl sm:text-3xl font-palanquin font-bold mb-6 sm:mb-10 dark:text-dark-text'>Shopping Cart</h2>
                <div className='flex flex-col gap-5'>
                    {cartItems.map((item) => (
                        <div key={item.slug} className='flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm dark:border-dark-border dark:bg-dark-card sm:flex-row sm:items-center sm:justify-between'>
                            <div className='flex items-center gap-4'>
                                <img
                                    src={item.imgURL}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className='rounded-xl object-contain flex-shrink-0 w-20 h-20 sm:w-[100px] sm:h-[100px]'
                                />
                                <div>
                                    <h3 className='font-palanquin font-bold text-lg sm:text-xl dark:text-dark-text'>{item.name}</h3>
                                    <p className='font-montserrat text-slate-gray dark:text-dark-muted'>{item.price}</p>
                                    <p className='font-montserrat text-sm text-slate-gray dark:text-dark-muted'>{item.category}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 sm:items-end'>
                                <div className='flex items-center justify-between gap-4 sm:justify-end'>
                                    <div className='flex h-11 items-center rounded-full border border-gray-200 dark:border-dark-border'>
                                        <button
                                            onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                                            className='h-11 w-11 font-montserrat text-xl text-slate-gray transition-colors hover:text-coral-red dark:text-dark-muted'
                                            aria-label={`Decrease quantity for ${item.name}`}
                                        >
                                            -
                                        </button>
                                        <span className='w-10 text-center font-montserrat font-semibold dark:text-dark-text'>
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                                            className='h-11 w-11 font-montserrat text-xl text-slate-gray transition-colors hover:text-coral-red disabled:cursor-not-allowed disabled:opacity-40 dark:text-dark-muted'
                                            disabled={item.quantity >= (item.stock ?? 99)}
                                            aria-label={`Increase quantity for ${item.name}`}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className='min-w-24 text-right font-montserrat font-bold text-coral-red'>
                                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.slug)}
                                    className='text-left font-montserrat font-semibold text-red-500 sm:text-right'
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-10 flex flex-col items-end gap-4'>
                    <p className='font-palanquin font-bold text-xl sm:text-2xl dark:text-dark-text'>Total: ${cartTotal.toFixed(2)}</p>
                    <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
                        <button
                            onClick={clearCart}
                            className='px-7 py-4 border font-montserrat text-lg leading-none bg-white dark:bg-dark-card rounded-full text-slate-gray dark:text-dark-muted border-slate-gray dark:border-dark-border w-full sm:w-auto transition-colors'
                        >
                            Clear Cart
                        </button>
                        <Link href='/checkout' className='w-full sm:w-auto'>
                            <Button label='Checkout' fullWidth />
                        </Link>
                    </div>
                </div>
                </div>
            </section>
            <section className='padding-x padding-t pb-8 bg-black dark:bg-dark-surface mt-10 transition-colors duration-300'>
                <Footer />
            </section>
        </main>
    );
};

export default Cart;
