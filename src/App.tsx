import { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';

function App() {
    const [cart, setCart] = useState([]);
    if (cart.length === 0 && localStorage.getItem("storedCart") && localStorage.getItem("storedCart") !== "[]") setCart(JSON.parse(localStorage.getItem("storedCart")!));
    
    return (
        <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home cart={cart} setCart={setCart} />}></Route>
                <Route path="/catalog" element={<Catalog cart={cart} setCart={setCart} />}></Route>
                <Route path="/product/:num" element={<ProductDetails cart={cart} setCart={setCart} />}></Route>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}></Route>
                <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />}></Route>
                <Route path="/contact-us" element={<Contact />}></Route>
                <Route path="*" element={<>Page not found</>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
