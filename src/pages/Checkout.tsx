import { useCart } from '../context/CartContext';
import { Button, Nav } from '../components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Footer } from '../sections';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setIsOrderPlaced(true);
        clearCart();
    };

    if (isOrderPlaced) {
        return (
            <main className='relative'>
                <Nav />
                <section className='padding-x py-10 w-full min-h-screen flex flex-col justify-center items-center pt-28 text-center px-4'>
                    <h2 className='text-3xl sm:text-4xl font-palanquin font-bold text-green-600'>Order Placed Successfully!</h2>
                    <p className='mt-4 font-montserrat text-lg text-slate-gray'>Thank you for your purchase.</p>
                    <Link to='/' className='mt-10'>
                        <Button label='Continue Shopping' />
                    </Link>
                </section>
                <section className='padding-x padding-t pb-8 bg-black mt-10'>
                    <Footer />
                </section>
            </main>
        );
    }

    if (cartItems.length === 0) {
        return (
            <main className='relative'>
                <Nav />
                <section className='padding-x py-10 w-full min-h-screen flex flex-col justify-center items-center pt-28 text-center'>
                    <h2 className='text-2xl sm:text-3xl font-palanquin font-bold'>Your Cart is Empty</h2>
                    <Link to='/' className='mt-5'>
                        <Button label='Start Shopping' />
                    </Link>
                </section>
                <section className='padding-x padding-t pb-8 bg-black mt-10'>
                    <Footer />
                </section>
            </main>
        );
    }

    return (
        <main className='relative'>
            <Nav />
            <section className='padding-x py-10 w-full min-h-screen flex flex-col lg:flex-row gap-10 pt-28'>
                {/* Shipping form */}
                <div className='flex-1'>
                    <h2 className='text-2xl sm:text-3xl font-palanquin font-bold mb-6'>Shipping Information</h2>
                    <form onSubmit={handlePlaceOrder} className='flex flex-col gap-4'>
                        <input
                            type='text'
                            placeholder='Full Name'
                            required
                            className='w-full border border-slate-gray rounded-full px-5 py-4 font-montserrat text-base text-slate-gray outline-none'
                        />
                        <input
                            type='email'
                            placeholder='Email Address'
                            required
                            className='w-full border border-slate-gray rounded-full px-5 py-4 font-montserrat text-base text-slate-gray outline-none'
                        />
                        <input
                            type='text'
                            placeholder='Address'
                            required
                            className='w-full border border-slate-gray rounded-full px-5 py-4 font-montserrat text-base text-slate-gray outline-none'
                        />
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <input
                                type='text'
                                placeholder='City'
                                required
                                className='flex-1 border border-slate-gray rounded-full px-5 py-4 font-montserrat text-base text-slate-gray outline-none'
                            />
                            <input
                                type='text'
                                placeholder='Postal Code'
                                required
                                className='flex-1 border border-slate-gray rounded-full px-5 py-4 font-montserrat text-base text-slate-gray outline-none'
                            />
                        </div>
                        <div className='mt-6'>
                            <Button label='Place Order' />
                        </div>
                    </form>
                </div>

                {/* Order summary */}
                <div className='flex-1 bg-slate-100 p-4 sm:p-6 rounded-2xl h-fit'>
                    <h2 className='text-xl sm:text-2xl font-palanquin font-bold mb-6'>Order Summary</h2>
                    <div className='flex flex-col gap-4 mb-6'>
                        {cartItems.map((item) => (
                            <div key={item.slug} className='flex justify-between gap-4'>
                                <p className='font-montserrat text-slate-gray'>{item.name} (x{item.quantity})</p>
                                <p className='font-montserrat font-semibold whitespace-nowrap'>
                                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className='border-t border-slate-300 pt-4 flex justify-between font-bold text-xl font-palanquin'>
                        <p>Total</p>
                        <p>${cartTotal.toFixed(2)}</p>
                    </div>
                </div>
            </section>
            <section className='padding-x padding-t pb-8 bg-black mt-10'>
                <Footer />
            </section>
        </main>
    );
};

export default Checkout;
