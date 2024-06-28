import React from 'react';

import CartItem from '../types/CartItem';
import CatalogProduct from '../components/catalog/CatalogProduct';

import productData from '../productData.json';

interface CatalogProps {
    cart: Array<CartItem>,
    setCart: any
}

const Catalog: React.FC<CatalogProps> = ({ cart, setCart }) => {

    return (
        <>
            <h1 className="text-4xl mt-16 mb-8 text-center text-zylo-blue-300">Catalog</h1>
            <div className="flex flex-row flex-wrap gap-4 justify-center mb-8">
                { productData.map(p => (
                    <CatalogProduct key={p.id} id={p.id} name={p.name} description={p.description} imageURL={p.image} />
                )) }
            </div>
        </>
    )

}

export default Catalog;