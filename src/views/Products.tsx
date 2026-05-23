'use client';

import { useState } from 'react';
import { Nav } from '../components';
import { Footer } from '../sections';
import { PopularProductCard } from '../components';
import { products } from '../constants';

const categories = ['All', 'Running', 'Casual', 'Sport', 'Limited Edition'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest'];

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeSort, setActiveSort] = useState('Featured');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = products.filter((p) => {
        const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
        const query = searchQuery.trim().toLowerCase();
        const matchesSearch =
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
    });

    const sorted = [...filtered].sort((a, b) => {
        const priceA = parseFloat(a.price.replace('$', ''));
        const priceB = parseFloat(b.price.replace('$', ''));
        if (activeSort === 'Price: Low to High') return priceA - priceB;
        if (activeSort === 'Price: High to Low') return priceB - priceA;
        return 0;
    });

    return (
        <main className='relative bg-white dark:bg-dark-bg transition-colors duration-300 min-h-screen'>
            <Nav />

            {/* Hero Banner */}
            <section className='padding-x pt-32 sm:pt-36 pb-14 sm:pb-16 bg-gradient-to-br from-primary to-white dark:from-dark-surface dark:to-dark-bg transition-colors duration-300'>
                <div className='max-container'>
                    <p className='font-montserrat text-coral-red text-lg font-semibold tracking-wide uppercase'>
                        Our Collection
                    </p>
                    <h1 className='mt-3 font-palanquin text-4xl sm:text-6xl font-bold leading-tight dark:text-dark-text'>
                        Shop <span className='text-coral-red'>All</span> Shoes
                    </h1>
                    <p className='mt-4 font-montserrat text-slate-gray dark:text-dark-muted text-lg max-w-xl'>
                        Discover our full range of premium footwear — from everyday comfort to high-performance sport shoes.
                    </p>
                </div>
            </section>

            {/* Filters & Search */}
            <section className='padding-x py-8 border-b border-gray-100 dark:border-dark-border transition-colors duration-300'>
                <div className='max-container flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-start'>
                    {/* Category Pills */}
                    <div className='flex flex-wrap gap-3'>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-full font-montserrat text-sm font-semibold transition-all duration-200 border ${activeCategory === cat
                                        ? 'bg-coral-red text-white border-coral-red shadow-md scale-105'
                                        : 'bg-white dark:bg-dark-card text-slate-gray dark:text-dark-muted border-gray-200 dark:border-dark-border hover:border-coral-red hover:text-coral-red'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search + Sort */}
                    <div className='flex w-full flex-col gap-3 sm:flex-row lg:w-auto'>
                        <div className='relative w-full sm:w-auto'>
                            <span className='absolute left-4 top-1/2 -translate-y-1/2 text-slate-gray dark:text-dark-muted'>
                                🔍
                            </span>
                            <input
                                type='text'
                                placeholder='Search shoes...'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='w-full pl-10 pr-5 py-2.5 rounded-full border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card font-montserrat text-sm text-slate-gray dark:text-dark-muted outline-none focus:border-coral-red transition-colors sm:w-64'
                            />
                        </div>
                        <select
                            value={activeSort}
                            onChange={(e) => setActiveSort(e.target.value)}
                            className='w-full px-5 py-2.5 rounded-full border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card font-montserrat text-sm text-slate-gray dark:text-dark-muted outline-none focus:border-coral-red transition-colors cursor-pointer sm:w-auto'
                        >
                            {sortOptions.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className='padding max-container'>
                <div className='flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center mb-8'>
                    <p className='font-montserrat text-slate-gray dark:text-dark-muted text-sm'>
                        Showing <span className='font-semibold text-coral-red'>{sorted.length}</span> products
                    </p>
                    <p className='font-montserrat text-slate-gray dark:text-dark-muted text-sm'>
                        Filter: <span className='font-semibold text-coral-red'>{activeCategory}</span>
                    </p>
                </div>

                {sorted.length === 0 ? (
                    <div className='flex flex-col items-center justify-center py-24 gap-4'>
                        <span className='text-6xl'>👟</span>
                        <h3 className='font-palanquin text-2xl font-bold dark:text-dark-text'>No shoes found</h3>
                        <p className='font-montserrat text-slate-gray dark:text-dark-muted'>
                            Try a different search term or category.
                        </p>
                        <button
                            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                            className='mt-2 px-6 py-3 bg-coral-red text-white rounded-full font-montserrat font-semibold hover:opacity-90 transition-opacity'
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                        {sorted.map((product) => (
                            <PopularProductCard key={product.slug} product={product} />
                        ))}
                    </div>
                )}
            </section>

            <section className='padding-x padding-t pb-8 bg-black dark:bg-dark-surface transition-colors duration-300'>
                <Footer />
            </section>
        </main>
    );
};

export default Products;
