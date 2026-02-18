import { useState } from 'react';
import { Nav } from '../components';
import { Footer } from '../sections';
import { Button } from '../components';

const contactInfo = [
    {
        icon: '📧',
        label: 'Email Us',
        value: 'customer@udt.com',
        href: 'mailto:customer@udt.com',
    },
    {
        icon: '📞',
        label: 'Call Us',
        value: '+92 554 862 354',
        href: 'tel:+92554862354',
    },
    {
        icon: '📍',
        label: 'Visit Us',
        value: '123 Shoe Street, Fashion District, NY 10001',
        href: '#',
    },
    {
        icon: '🕐',
        label: 'Business Hours',
        value: 'Mon – Fri: 9am – 6pm',
        href: '#',
    },
];

const faqs = [
    {
        q: 'How long does shipping take?',
        a: 'Standard shipping takes 3–5 business days. Express shipping is available at checkout for 1–2 business days.',
    },
    {
        q: 'What is your return policy?',
        a: 'We offer a 30-day hassle-free return policy. Items must be unworn and in original packaging.',
    },
    {
        q: 'Do you ship internationally?',
        a: 'Yes! We ship to over 50 countries worldwide. International shipping times vary by destination.',
    },
    {
        q: 'How do I find my size?',
        a: 'Check our size guide on each product page. We recommend measuring your foot and comparing with our chart.',
    },
];

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const inputClass =
        'w-full border border-gray-200 dark:border-dark-border rounded-xl px-5 py-3.5 font-montserrat text-base text-slate-gray dark:text-dark-muted bg-white dark:bg-dark-card outline-none focus:border-coral-red transition-colors placeholder:text-gray-300 dark:placeholder:text-dark-border';

    return (
        <main className='relative bg-white dark:bg-dark-bg transition-colors duration-300 min-h-screen'>
            <Nav />

            {/* Hero */}
            <section className='padding-x pt-36 pb-16 bg-gradient-to-br from-primary to-white dark:from-dark-surface dark:to-dark-bg transition-colors duration-300'>
                <div className='max-container text-center'>
                    <p className='font-montserrat text-coral-red text-lg font-semibold tracking-wide uppercase'>
                        Get in Touch
                    </p>
                    <h1 className='mt-3 font-palanquin text-5xl sm:text-6xl font-bold dark:text-dark-text'>
                        We'd Love to <span className='text-coral-red'>Hear</span> From You
                    </h1>
                    <p className='mt-4 font-montserrat text-slate-gray dark:text-dark-muted text-lg max-w-xl mx-auto'>
                        Have a question, feedback, or just want to say hello? Our team is ready to help.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className='padding-x py-16 max-container'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {contactInfo.map((info) => (
                        <a
                            key={info.label}
                            href={info.href}
                            className='flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 dark:border-dark-border dark:bg-dark-card hover:border-coral-red hover:shadow-md hover:-translate-y-1 transition-all duration-300 group'
                        >
                            <span className='text-4xl mb-4'>{info.icon}</span>
                            <h3 className='font-palanquin text-lg font-bold dark:text-dark-text group-hover:text-coral-red transition-colors'>
                                {info.label}
                            </h3>
                            <p className='mt-2 font-montserrat text-slate-gray dark:text-dark-muted text-sm leading-6'>
                                {info.value}
                            </p>
                        </a>
                    ))}
                </div>
            </section>

            {/* Contact Form + FAQ */}
            <section className='padding max-container'>
                <div className='flex flex-col lg:flex-row gap-16'>
                    {/* Form */}
                    <div className='flex-1'>
                        <h2 className='font-palanquin text-3xl font-bold dark:text-dark-text'>
                            Send Us a <span className='text-coral-red'>Message</span>
                        </h2>
                        <p className='mt-3 font-montserrat text-slate-gray dark:text-dark-muted'>
                            Fill out the form and we'll get back to you within 24 hours.
                        </p>

                        {submitted ? (
                            <div className='mt-10 p-8 rounded-2xl bg-green-50 dark:bg-dark-card border border-green-200 dark:border-dark-border text-center'>
                                <span className='text-5xl'>✅</span>
                                <h3 className='mt-4 font-palanquin text-2xl font-bold text-green-700 dark:text-green-400'>
                                    Message Sent!
                                </h3>
                                <p className='mt-2 font-montserrat text-slate-gray dark:text-dark-muted'>
                                    Thank you for reaching out. We'll be in touch shortly.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                                    className='mt-6 px-6 py-3 bg-coral-red text-white rounded-full font-montserrat font-semibold hover:opacity-90 transition-opacity'
                                >
                                    Send Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-4'>
                                <div className='flex flex-col sm:flex-row gap-4'>
                                    <input
                                        type='text'
                                        placeholder='Your Name'
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className={inputClass}
                                    />
                                    <input
                                        type='email'
                                        placeholder='Your Email'
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className={inputClass}
                                    />
                                </div>
                                <input
                                    type='text'
                                    placeholder='Subject'
                                    required
                                    value={form.subject}
                                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    className={inputClass}
                                />
                                <textarea
                                    placeholder='Your message...'
                                    required
                                    rows={6}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className={`${inputClass} resize-none`}
                                />
                                <div className='mt-2'>
                                    <Button label='Send Message' />
                                </div>
                            </form>
                        )}
                    </div>

                    {/* FAQ */}
                    <div className='flex-1'>
                        <h2 className='font-palanquin text-3xl font-bold dark:text-dark-text'>
                            Frequently Asked <span className='text-coral-red'>Questions</span>
                        </h2>
                        <p className='mt-3 font-montserrat text-slate-gray dark:text-dark-muted'>
                            Quick answers to common questions.
                        </p>
                        <div className='mt-8 flex flex-col gap-3'>
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className='border border-gray-100 dark:border-dark-border rounded-xl overflow-hidden dark:bg-dark-card'
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className='w-full flex justify-between items-center px-6 py-4 text-left font-montserrat font-semibold dark:text-dark-text hover:text-coral-red dark:hover:text-coral-red transition-colors'
                                    >
                                        <span>{faq.q}</span>
                                        <span className={`text-coral-red text-xl transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                                    </button>
                                    {openFaq === i && (
                                        <div className='px-6 pb-5 font-montserrat text-slate-gray dark:text-dark-muted leading-7 text-sm border-t border-gray-100 dark:border-dark-border pt-4'>
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='padding-x padding-t pb-8 bg-black dark:bg-dark-surface transition-colors duration-300'>
                <Footer />
            </section>
        </main>
    );
};

export default Contact;
