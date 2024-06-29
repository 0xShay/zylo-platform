import React from 'react';

import CartItem from '../types/CartItem';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC = () => {

    return (
        <>

            <h1 className="text-4xl xl:ml-16 xl:mr-16 mt-16 text-center text-zylo-blue-300"><b>Page not found</b></h1>
            <p className="text-xl mt-4 xl:ml-16 xl:mr-16 text-center">
                The requested page could not be found.
            </p>
            <div className="flex justify-center">
                <Link to="/" className="bg-gradient-to-tr from-zylo-blue-400 to-zylo-blue-300 hover:from-zylo-blue-200 hover:to-zylo-blue-100 hover:text-zylo-blue-400 mt-4 mb-8 text-xl text-white p-2 rounded-lg inline-block hover:cursor-pointer hover:bg-zylo-blue-300">
                    Return home
                </Link>
            </div>

        </>
    )

}

export default PageNotFound;