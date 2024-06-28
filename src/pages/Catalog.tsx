import React from 'react';

import CartItem from '../types/CartItem';

interface CatalogProps {
    cart: Array<CartItem>,
    setCart: any
}

const Catalog: React.FC<CatalogProps> = ({ cart, setCart }) => {

    return (
        <>
            <h1 className="text-4xl mt-16 text-center text-zylo-blue-300">Catalog</h1>
        </>
    )

}

export default Catalog;