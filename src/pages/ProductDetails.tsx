import React from 'react';
import { Link, useParams } from 'react-router-dom';

import CartItem from '../types/CartItem';
import CatalogProduct from '../components/catalog/CatalogProduct';

import productData from '../productData.json';

interface ProductDetailsProps {
    cart: Array<CartItem>,
    setCart: any
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ cart, setCart }) => {

    let { num } = useParams();
    let productID = parseInt(num || '-1');

    let p = productData.find(p => {
        return p.id == productID;
    });

    return p == undefined ? (
        <>
            <h1 className="text-4xl mt-16 ml-4 mr-4 mb-4 text-center text-zylo-blue-300">Product not found</h1>
            <div className="ml-8 mr-8 text-center text-2xl">
                The requested product was not found in our database.
            </div>
            <Link to="/catalog" className="ml-8 mt-4 mb-8 xl:ml-0 text-xl bg-zylo-blue-400 text-white p-2 rounded-lg inline-block hover:cursor-pointer hover:bg-zylo-blue-300">
                Back to catalog
            </Link>
        </>
    ) : (
        <>
            <h1 className="text-4xl mt-16 mb-8 text-center text-zylo-blue-300">{p.name}</h1>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
                <img src={p.image} alt={p.name} className="w-1/3 xl:w-1/6 h-auto object-cover object-center" style={{ aspectRatio: '1/1' }} />
                <div className="xl:w-1/2">
                    <div className="ml-8 mr-8 xl:m-0 text-xl text-zylo-blue-400">{p.description}</div>
                    <Link to="/catalog" className="ml-8 mt-4 mb-8 xl:ml-0 text-xl bg-zylo-blue-400 text-white p-2 rounded-lg inline-block hover:cursor-pointer hover:bg-zylo-blue-300">
                        Back to catalog
                    </Link>
                </div>
            </div>
                
        </>
    )

}

export default ProductDetails;