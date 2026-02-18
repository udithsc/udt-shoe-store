import { useParams, Link } from 'react-router-dom';
import { products } from '../constants';
import { Nav, Button, PopularProductCard } from '../components';
import { Footer } from '../sections';
import { star, arrowRight } from '../assets/icons';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { slug } = useParams();
    const { addToCart } = useCart();
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return (
            <div className='min-h-screen flex flex-col justify-center items-center px-8 text-center bg-white dark:bg-dark-bg transition-colors duration-300'>
                <h1 className='text-3xl sm:text-4xl font-palanquin font-bold dark:text-dark-text'>Product Not Found</h1>
                <p className='mt-4 font-montserrat text-lg text-slate-gray dark:text-dark-muted'>
                    The product you are looking for does not exist.
                </p>
                <div className='mt-10'>
                    <Link to='/'>
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
                            className='object-contain w-full max-w-[570px]'
                        />
                    </div>
                    <div className='flex flex-1 flex-col w-full'>
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

                        <div className='mt-10 flex flex-wrap gap-4'>
                            <Button
                                label='Add to cart'
                                iconUrl={arrowRight}
                                onClick={() => addToCart(product)}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='padding mt-16 max-container'>
                <h3 className='font-palanquin text-2xl sm:text-3xl font-bold mb-6 dark:text-dark-text'>Similar Products</h3>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-10'>
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
