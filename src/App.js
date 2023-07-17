import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home' 
import ProductPage from './pages/ProductPage';
import ProductSingle from './pages/ProductSingle';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/Register" element={<Register />} exact />
      <Route path="/Cart" element={<Cart />} exact />
      <Route path="/Login" element={<Login />} exact />
      <Route path="/Product-Page" element={<ProductPage />} exact />
      <Route path="/Product-single" element={<ProductSingle />} exact /> 
      </Routes>
    </Router>
  
  )
}

export default App;
