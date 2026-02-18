import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { headerLogo, headerLogoDark } from '../assets/images';
import { Button } from '../components';
import { useTheme } from '../context/ThemeContext';

const SignIn = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!isLogin && form.password !== form.confirm) {
            setError('Passwords do not match.');
            return;
        }
        // Simulate auth — navigate home on success
        navigate('/');
    };

    const inputClass =
        'w-full border border-gray-200 dark:border-dark-border rounded-xl px-5 py-3.5 font-montserrat text-base text-slate-gray dark:text-dark-muted bg-white dark:bg-dark-card outline-none focus:border-coral-red transition-colors placeholder:text-gray-300 dark:placeholder:text-dark-border';

    return (
        <main className='min-h-screen bg-gradient-to-br from-primary via-white to-pale-blue dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg flex items-center justify-center px-4 py-16 transition-colors duration-300'>
            {/* Theme toggle (top-right) */}
            <button
                onClick={toggleTheme}
                aria-label='Toggle theme'
                className={`theme-toggle fixed top-6 right-6 z-50 ${theme === 'light' ? 'light-mode' : 'dark-mode'}`}
            >
                <span className='theme-toggle-thumb'>{theme === 'light' ? '☀️' : '🌙'}</span>
            </button>

            <div className='w-full max-w-md'>
                {/* Logo */}
                <div className='flex justify-center mb-8'>
                    <Link to='/'>
                        <img src={theme === 'dark' ? headerLogoDark : headerLogo} alt='UDT Shoes' className='h-8 object-contain' />
                    </Link>
                </div>

                {/* Card */}
                <div className='bg-white dark:bg-dark-surface rounded-3xl shadow-xl dark:shadow-none border border-gray-100 dark:border-dark-border p-8 sm:p-10 transition-colors duration-300'>
                    {/* Tab Toggle */}
                    <div className='flex rounded-full bg-gray-100 dark:bg-dark-card p-1 mb-8'>
                        <button
                            onClick={() => { setIsLogin(true); setError(''); }}
                            className={`flex-1 py-2.5 rounded-full font-montserrat font-semibold text-sm transition-all duration-300 ${isLogin
                                ? 'bg-coral-red text-white shadow-md'
                                : 'text-slate-gray dark:text-dark-muted hover:text-coral-red'
                                }`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => { setIsLogin(false); setError(''); }}
                            className={`flex-1 py-2.5 rounded-full font-montserrat font-semibold text-sm transition-all duration-300 ${!isLogin
                                ? 'bg-coral-red text-white shadow-md'
                                : 'text-slate-gray dark:text-dark-muted hover:text-coral-red'
                                }`}
                        >
                            Create Account
                        </button>
                    </div>

                    <h1 className='font-palanquin text-3xl font-bold dark:text-dark-text mb-1'>
                        {isLogin ? 'Welcome back!' : 'Join UDT Shoes'}
                    </h1>
                    <p className='font-montserrat text-slate-gray dark:text-dark-muted text-sm mb-8'>
                        {isLogin
                            ? 'Sign in to access your orders and wishlist.'
                            : 'Create an account to start shopping.'}
                    </p>

                    {error && (
                        <div className='mb-5 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 font-montserrat text-sm'>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                        {!isLogin && (
                            <input
                                type='text'
                                placeholder='Full Name'
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className={inputClass}
                            />
                        )}
                        <input
                            type='email'
                            placeholder='Email Address'
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className={inputClass}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            required
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            className={inputClass}
                        />
                        {!isLogin && (
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                required
                                value={form.confirm}
                                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                                className={inputClass}
                            />
                        )}

                        {isLogin && (
                            <div className='flex justify-end'>
                                <button
                                    type='button'
                                    className='font-montserrat text-sm text-coral-red hover:underline'
                                >
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        <div className='mt-2'>
                            <Button label={isLogin ? 'Sign In' : 'Create Account'} fullWidth />
                        </div>
                    </form>

                    {/* Divider */}
                    <div className='flex items-center gap-4 my-6'>
                        <div className='flex-1 h-px bg-gray-200 dark:bg-dark-border' />
                        <span className='font-montserrat text-sm text-slate-gray dark:text-dark-muted'>or continue with</span>
                        <div className='flex-1 h-px bg-gray-200 dark:bg-dark-border' />
                    </div>

                    {/* Social buttons */}
                    <div className='flex gap-3'>
                        {[
                            { label: 'Google', emoji: '🔵' },
                            { label: 'Apple', emoji: '🍎' },
                            { label: 'Facebook', emoji: '📘' },
                        ].map((s) => (
                            <button
                                key={s.label}
                                type='button'
                                className='flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 dark:border-dark-border dark:bg-dark-card font-montserrat text-sm text-slate-gray dark:text-dark-muted hover:border-coral-red hover:text-coral-red transition-colors'
                            >
                                <span>{s.emoji}</span>
                                <span className='hidden sm:inline'>{s.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Back to home */}
                <p className='text-center mt-6 font-montserrat text-sm text-slate-gray dark:text-dark-muted'>
                    <Link to='/' className='text-coral-red hover:underline font-semibold'>
                        ← Back to Home
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default SignIn;
