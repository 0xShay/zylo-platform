import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../../types/CartItem';

interface CartProductProps {
    cart: Array<CartItem>,
    setCart: any,
    id: number,
    name: string,
    price: number,
    description: string,
    imageURL: string,
    quantity: number
}

const CartProduct: React.FC<CartProductProps> = ({ cart, setCart, id, name, price, description, imageURL, quantity }) => {
 
    function setQuantity(productId: number, newQuantity: number) {
        if (newQuantity < 0) return;
        const newCart: Array<CartItem> = [];
        for (let index in cart) {
            let ci: CartItem = cart[index];
            if (ci.productId === productId) {
                if (newQuantity == 0) {
                    delete cart[index];
                } else {
                    newCart.push({ ...ci, quantity: newQuantity });
                }
                break;
            }
            newCart.push(ci);
        }
        setCart(newCart);
    }

    return (
        <div className="odd:bg-lightgray">
            <div className="hover:bg-zylo-gray p-4 pl-8 pr-8 flex flex-row items-center justify-between w-full h-40">
                <Link to={`/product/${id}`} className="flex flex-row items-center justify-left w-full h-40">
                    <img src={imageURL} alt={name} className="h-5/6 w-auto object-cover object-center" style={{ aspectRatio: '1/1' }} />
                    <div className="w-1/3 text-xl text-zylo-blue-300 ml-8">{name}</div>
                </Link>
                <div className="text-xl text-zylo-blue-300 text-right">${price.toFixed(2)}<br />x{quantity}</div>
                <input type="number" className="ml-4 text-xl w-20 rounded-md shadow-md" value={quantity} onChange={(e) => setQuantity(id, parseInt(e.target.value))} />
            </div>
        </div>
    )

}

export default CartProduct;