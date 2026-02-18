import { useCart } from '../context/CartContext';
import { Button, Nav } from '../components';
import { Link } from 'react-router-dom';
import { Footer } from '../sections';

const Cart = () => {
    const { cartItems, removeFromCart, cartTotal, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <main className='relative bg-white dark:bg-dark-bg transition-colors duration-300'>
                <Nav />
                <section className='padding-x py-10 w-full min-h-screen flex flex-col justify-center items-center pt-28'>
                    <h2 className='text-3xl font-palanquin font-bold text-center dark:text-dark-text'>Your Cart is Empty</h2>
                    <Link to='/' className='mt-5'>
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
                <h2 className='text-2xl sm:text-3xl font-palanquin font-bold mb-6 sm:mb-10 dark:text-dark-text'>Shopping Cart</h2>
                <div className='flex flex-col gap-6'>
                    {cartItems.map((item) => (
                        <div key={item.slug} className='flex flex-col sm:flex-row justify-between sm:items-center border-b dark:border-dark-border pb-4 gap-4'>
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
                                    <p className='font-montserrat text-slate-gray dark:text-dark-muted'>Qty: {item.quantity}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.slug)}
                                className='text-red-500 font-montserrat font-semibold self-start sm:self-center'
                            >
                                Remove
                            </button>
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
                        <Link to='/checkout' className='w-full sm:w-auto'>
                            <Button label='Checkout' fullWidth />
                        </Link>
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
