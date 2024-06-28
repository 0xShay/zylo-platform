import React from 'react';

import CartItem from '../types/CartItem';

interface CheckoutProps {
    cart: Array<CartItem>,
    setCart: any
}

const Checkout: React.FC<CheckoutProps> = ({ cart, setCart }) => {

    return (
        <>
            <div className="m-16 text-center text-2xl font-mono">
                This is where the data about the user's cart would get sent to a backend server and a payment invoice would be generated via an external payment API, which the user will then be redirected to in order to complete their payment for the order.
            </div>
        </>
    );

}

export default Checkout;