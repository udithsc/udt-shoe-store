'use client';

import { CartProvider } from '../context/CartContext';
import { ThemeProvider } from '../context/ThemeContext';

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider>
    <CartProvider>{children}</CartProvider>
  </ThemeProvider>
);

export default Providers;
