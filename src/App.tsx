import { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Catalog from './pages/Catalog';

function App() {
    const [cart, setCart] = useState([]);

    return (
        <div className="App">
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home cart={cart} setCart={setCart} />}></Route>
                <Route path="/catalog" element={<Catalog cart={cart} setCart={setCart} />}></Route>
                <Route path="*" element={<>Page not found</>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
