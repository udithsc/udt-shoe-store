import { Nav } from '../components';
import { Footer } from '../sections';
import { shoe8 } from '../assets/images';
import { Button } from '../components';
import { arrowRight } from '../assets/icons';
import { Link } from 'react-router-dom';
import { statistics } from '../constants';

const values = [
    {
        icon: '🎯',
        title: 'Our Mission',
        description:
            'Make well-built shoes that are worth buying — good materials, honest pricing, and nothing that falls apart after a month.',
    },
    {
        icon: '👁️',
        title: 'Our Vision',
        description:
            'Grow into a brand people actually trust. Not through hype, but by consistently putting out products that hold up.',
    },
    {
        icon: '💎',
        title: 'Our Values',
        description:
            'Quality and honesty. We\'d rather lose a sale than ship something we\'re not proud of.',
    },
];

const team = [
    { name: 'Alex Rivera', role: 'Founder & CEO', emoji: '👨‍💼' },
    { name: 'Jordan Lee', role: 'Head of Design', emoji: '🎨' },
    { name: 'Sam Chen', role: 'Lead Engineer', emoji: '⚙️' },
    { name: 'Taylor Kim', role: 'Marketing Director', emoji: '📣' },
];

const About = () => {
    return (
        <main className='relative bg-white dark:bg-dark-bg transition-colors duration-300 min-h-screen'>
            <Nav />

            {/* Hero */}
            <section className='padding-x pt-36 pb-20 bg-gradient-to-br from-primary to-white dark:from-dark-surface dark:to-dark-bg transition-colors duration-300'>
                <div className='max-container flex flex-col lg:flex-row items-center gap-16'>
                    <div className='flex-1'>
                        <p className='font-montserrat text-coral-red text-lg font-semibold tracking-wide uppercase'>
                            Our Story
                        </p>
                        <h1 className='mt-3 font-palanquin text-5xl sm:text-6xl font-bold dark:text-dark-text leading-tight'>
                            Crafted with <span className='text-coral-red'>Passion</span>,<br />
                            Built to Last
                        </h1>
                        <p className='mt-6 font-montserrat text-slate-gray dark:text-dark-muted text-lg leading-8 max-w-lg'>
                            UDT Shoes started with a straightforward idea: most people just want a shoe that looks decent, fits well, and doesn't fall apart. We've been working on that since day one, and now ship to customers in over 50 countries.
                        </p>
                        <div className='mt-10'>
                            <Link to='/products'>
                                <Button label='Shop the Collection' iconUrl={arrowRight} />
                            </Link>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-center'>
                        <img
                            src={shoe8}
                            alt='UDT Shoes'
                            className='object-contain w-full max-w-[480px] drop-shadow-2xl'
                        />
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className='padding bg-pale-blue dark:bg-dark-surface transition-colors duration-300'>
                <div className='max-container'>
                    <div className='grid grid-cols-3 gap-8 text-center'>
                        {statistics.map((stat, i) => (
                            <div key={i} className='flex flex-col items-center'>
                                <p className='font-palanquin text-4xl sm:text-5xl font-bold text-coral-red'>{stat.value}</p>
                                <p className='mt-2 font-montserrat text-slate-gray dark:text-dark-muted text-lg'>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className='padding max-container'>
                <h2 className='font-palanquin text-4xl font-bold text-center dark:text-dark-text'>
                    What We <span className='text-coral-red'>Stand For</span>
                </h2>
                <p className='mt-4 font-montserrat text-slate-gray dark:text-dark-muted text-lg text-center max-w-xl mx-auto'>
                    Three pillars that guide every decision we make.
                </p>
                <div className='mt-16 grid md:grid-cols-3 gap-8'>
                    {values.map((v) => (
                        <div
                            key={v.title}
                            className='rounded-2xl p-8 border border-gray-100 dark:border-dark-border dark:bg-dark-card shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300'
                        >
                            <span className='text-5xl'>{v.icon}</span>
                            <h3 className='mt-5 font-palanquin text-2xl font-bold dark:text-dark-text'>{v.title}</h3>
                            <p className='mt-3 font-montserrat text-slate-gray dark:text-dark-muted leading-7'>{v.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className='padding bg-pale-blue dark:bg-dark-surface transition-colors duration-300'>
                <div className='max-container'>
                    <h2 className='font-palanquin text-4xl font-bold text-center dark:text-dark-text'>
                        Meet the <span className='text-coral-red'>Team</span>
                    </h2>
                    <p className='mt-4 font-montserrat text-slate-gray dark:text-dark-muted text-lg text-center max-w-xl mx-auto'>
                        The passionate people behind UDT Shoes.
                    </p>
                    <div className='mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className='flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
                            >
                                <div className='w-20 h-20 rounded-full bg-primary dark:bg-dark-surface flex items-center justify-center text-4xl mb-4'>
                                    {member.emoji}
                                </div>
                                <h3 className='font-palanquin text-xl font-bold dark:text-dark-text'>{member.name}</h3>
                                <p className='mt-1 font-montserrat text-slate-gray dark:text-dark-muted text-sm'>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='padding max-container text-center'>
                <h2 className='font-palanquin text-4xl font-bold dark:text-dark-text'>
                    Ready to Find Your <span className='text-coral-red'>Perfect Pair?</span>
                </h2>
                <p className='mt-4 font-montserrat text-slate-gray dark:text-dark-muted text-lg max-w-lg mx-auto'>
                    Browse our full collection and experience the UDT difference.
                </p>
                <div className='mt-10 flex justify-center'>
                    <Link to='/products'>
                        <Button label='Explore Products' iconUrl={arrowRight} />
                    </Link>
                </div>
            </section>

            <section className='padding-x padding-t pb-8 bg-black dark:bg-dark-surface transition-colors duration-300'>
                <Footer />
            </section>
        </main>
    );
};

export default About;
