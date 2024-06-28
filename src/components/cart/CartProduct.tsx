import React from 'react';
import { Link } from 'react-router-dom';

interface CartProductProps {
    id: number,
    name: string,
    price: number,
    description: string,
    imageURL: string
}

const CartProduct: React.FC<CartProductProps> = ({ id, name, price, description, imageURL }) => {
    
    return (
        <div className="odd:bg-lightgray">
            <div className="hover:bg-zylo-gray p-4 pl-8 pr-8 flex flex-row items-center justify-between w-full h-40">
                <Link to={`/product/${id}`} className="flex flex-row items-center justify-left w-full h-40">
                    <img src={imageURL} alt={name} className="h-5/6 w-auto object-cover object-center" style={{ aspectRatio: '1/1' }} />
                    <div className="w-1/3 text-xl text-zylo-blue-300 ml-8">{name}</div>
                </Link>
                <div className="text-xl text-zylo-blue-300">${price.toFixed(2)}</div>
            </div>
        </div>
    )

}

export default CartProduct;