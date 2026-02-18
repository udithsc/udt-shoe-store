import { useCart } from '../context/CartContext';
import { Button, Nav } from '../components';
import { Link } from 'react-router-dom';
import { Footer } from '../sections';

const Cart = () => {
    const { cartItems, removeFromCart, cartTotal, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <main className='relative'>
                <Nav />
                <section className='padding-x py-10 w-full min-h-screen flex flex-col justify-center items-center pt-28'>
                    <h2 className='text-3xl font-palanquin font-bold'>Your Cart is Empty</h2>
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
            <section className='padding-x py-10 w-full min-h-screen pt-28'>
                <h2 className='text-3xl font-palanquin font-bold mb-10'>Shopping Cart</h2>
                <div className='flex flex-col gap-6'>
                    {cartItems.map((item) => (
                        <div key={item.slug} className='flex justify-between items-center border-b pb-4'>
                            <div className='flex items-center gap-4'>
                                <img src={item.imgURL} alt={item.name} width={100} height={100} className='rounded-xl object-contain' />
                                <div>
                                    <h3 className='font-palanquin font-bold text-xl'>{item.name}</h3>
                                    <p className='font-montserrat text-slate-gray'>{item.price}</p>
                                    <p className='font-montserrat text-slate-gray'>Qty: {item.quantity}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.slug)}
                                className='text-red-500 font-montserrat font-semibold'
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>

                <div className='mt-10 flex flex-col items-end gap-4'>
                    <p className='font-palanquin font-bold text-2xl'>Total: ${cartTotal.toFixed(2)}</p>
                    <div className='flex gap-4'>
                        <button
                            onClick={clearCart}
                            className='px-7 py-4 border font-montserrat text-lg leading-none bg-white rounded-full text-slate-gray border-slate-gray'
                        >
                            Clear Cart
                        </button>
                        <Link to='/checkout'>
                            <Button label='Checkout' />
                        </Link>
                    </div>
                </div>
            </section>
            <section className='padding-x padding-t pb-8 bg-black mt-10'>
                <Footer />
            </section>
        </main>
    );
};

export default Cart;
