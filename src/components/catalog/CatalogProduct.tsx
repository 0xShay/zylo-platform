import React from 'react';
import { Link } from 'react-router-dom';

interface CatalogProductProps {
    id: number,
    name: string,
    price: number,
    description: string,
    imageURL: string
}

const CatalogProduct: React.FC<CatalogProductProps> = ({ id, name, price, description, imageURL }) => {
    
    return (
        <Link to={`/product/${id}`} className="bg-gradient-to-br from-white to-lightgray hover:from-lightgray hover:to-white shadow-lg rounded-xl hover:cursor-pointer p-4 flex flex-col justify-top w-60 h-80">
            <img src={imageURL} alt={name} className="w-full h-auto object-cover object-center" style={{ aspectRatio: '1/1' }} />
            <div className="text-lg text-zylo-blue-300">{name}</div>
            <div className="text-xl text-zylo-blue-400">${price.toFixed(2)}</div>
        </Link>
    )

}

export default CatalogProduct;