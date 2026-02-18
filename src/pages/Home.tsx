import { Nav } from '../components';
import {
    Footer,
    Hero,
    PopularProducts,
    Services,
    SpecialOffer,
    Subscribe,
    SuperQuality,
    CustomerReviews,
} from '../sections';

const Home = () => {
    return (
        <main className='relative bg-white dark:bg-dark-bg transition-colors duration-300'>
            <Nav />
            <section className='xl:padding-l wide:padding-r padding-b'>
                <Hero />
            </section>
            <section className='padding'>
                <PopularProducts />
            </section>
            <section className='padding'>
                <SuperQuality />
            </section>
            <section className='padding-x py-10'>
                <Services />
            </section>
            <section className='padding'>
                <SpecialOffer />
            </section>
            <section className='padding bg-pale-blue dark:bg-dark-surface transition-colors duration-300'>
                <CustomerReviews />
            </section>
            <section className='padding-x sm:py-32 py-16 w-full'>
                <Subscribe />
            </section>
            <section className='padding-x padding-t pb-8 bg-black dark:bg-dark-surface transition-colors duration-300'>
                <Footer />
            </section>
        </main>
    );
};

export default Home;
