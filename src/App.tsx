import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:slug' element={<ProductDetails />} />
    </Routes>
  </Router>
);

export default App;
