import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => (
  <ThemeProvider>
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:slug' element={<ProductDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  </ThemeProvider>
);

export default App;
