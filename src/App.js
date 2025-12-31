import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Product from './components/Products';
import Orders from './components/Orders';
import ProductDetails from './components/ProductDetails';
import Primeuser from './components/Primeuser';
import Cart from './components/Cart';
import Myorders from './components/Myorders';
import Profile from './components/Profile';

import ProtechtedRouter from './components/ProtechtedRouter';
import CartProvider from './Context/CartProvider';
import UserProvider from './Context/UserProvider';

const App = () => {

  

  return (
    <Router>
      <UserProvider>
      <CartProvider>
      <Routes>
        <Route exact path="/register" element={<RegistrationForm />} />
        <Route exact path="/login" element={<LoginForm/>}/>
        <Route exact path="/" element={<ProtechtedRouter><Home/></ProtechtedRouter>}/>
        <Route exact path="/products" element={<ProtechtedRouter><Product/></ProtechtedRouter>}/>
        <Route exact path="/cart" element={<ProtechtedRouter><Cart/></ProtechtedRouter>}/>
        <Route exact path="/profile" element={<ProtechtedRouter><Profile/></ProtechtedRouter>}/>
        <Route exact path="/orders" element={<ProtechtedRouter><Orders/></ProtechtedRouter>}/>
        <Route exact path="/myorders" element={<ProtechtedRouter><Myorders/></ProtechtedRouter>}/>
        <Route exact path="/primeuser" element={<ProtechtedRouter><Primeuser/></ProtechtedRouter>}/>
        <Route exact path="/products/:id" element={<ProtechtedRouter><ProductDetails/></ProtechtedRouter>}/>
      </Routes>
      </CartProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
