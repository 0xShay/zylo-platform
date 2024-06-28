import React from 'react';
import { Link } from 'react-router-dom';

interface CatalogProductProps {
    id: number,
    name: string,
    description: string,
    imageURL: string
}

const CatalogProduct: React.FC<CatalogProductProps> = ({ id, name, description, imageURL }) => {
    
    return (
        <Link to={`/product/${id}`} className="bg-gradient-to-br from-white to-lightgray hover:from-lightgray hover:to-white shadow-lg rounded-xl hover:cursor-pointer p-4 flex flex-col items-center justify-between w-60 h-80">
            <div className="text-xl text-zylo-blue-300">{name}</div>
            <img src={imageURL} alt={name} className="w-full h-auto object-cover object-center" style={{ aspectRatio: '1/1' }} />
        </Link>
    )

}

export default CatalogProduct;