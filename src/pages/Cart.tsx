import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../types/CartItem';
import CartProduct from '../components/cart/CartProduct';

import productData from '../productData.json';

interface CartProps {
    cart: Array<CartItem>,
    setCart: any
}

function getProductById(id: number) {
    return productData.find(p => {
        return p.id === id;
    });
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {

    return (
        <>
            <h1 className="text-4xl mt-16 ml-4 mr-4 mb-8 text-center text-zylo-blue-300">Cart</h1>
            { cart.map(ci => {
                let p = productData.find(p => {
                    return p.id === ci.productId;
                });
                return p && (
                    <CartProduct key={p.id} cart={cart} setCart={setCart} id={p.id} name={p.name} price={p.price} description={p.description} imageURL={p.image} quantity={ci.quantity}></CartProduct>
                )
            }) }
            { cart.length === 0 ? (
                <div className="ml-8 mr-8 text-center text-2xl">
                    There are no items in your cart.
                </div>
            ) : (
                <div className="p-4 pl-8 pr-8 flex flex-row items-center justify-between w-full h-20">
                    <div className="text-xl text-zylo-blue-400">Cart total</div>
                    <div className="text-xl text-zylo-blue-400">${cart.reduce((acc, curr) => acc + ((getProductById(curr.productId)?.price || 0) * curr.quantity), 0).toFixed(2)}</div>
                </div>
            ) }
            <div className="flex justify-center mt-4 mb-4 gap-4 flex-row">
                <Link to="/catalog" className="w-1/4 text-center text-sm md:text-xl bg-zylo-blue-400 text-white p-2 rounded-lg inline-block hover:cursor-pointer hover:bg-zylo-blue-300">
                    Back to catalog
                </Link>
                <Link to="/checkout" className="w-1/4 text-center text-sm md:text-xl bg-zylo-blue-400 text-white p-2 rounded-lg inline-block hover:cursor-pointer hover:bg-zylo-blue-300">
                    Go to checkout
                </Link>
            </div>
        </>
    )

}

export default Cart;