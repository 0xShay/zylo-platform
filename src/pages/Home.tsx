import React from 'react';

import CartItem from '../types/CartItem';
import { Link } from 'react-router-dom';

interface HomeProps {
    cart: Array<CartItem>,
    setCart: any
}

const Home: React.FC<HomeProps> = ({ cart, setCart }) => {

    return (
        <>

            <div className="flex flex-col xl:flex-row p-8 xl:p-16">

                <div className="p-8 xl:w-1/3 flex flex-col justify-center items-center">
                    <h1 className="text-4xl ml-16 mr-16 text-center text-zylo-blue-300">Our mission is to promote a <b>sustainable</b> lifestyle and reduce environmental impact.</h1>
                    <p className="text-xl mt-4 ml-16 mr-16 text-center">
                        Zylo’s mission is to foster a culture of sustainability in the fashion industry. We offer ethically produced and sustainably sourced products, promoting transparency so you know exactly where your clothing comes from and its certifications. Join us in promoting ethical fashion and making a difference, one piece of clothing at a time.
                    </p>
                </div>

                <div className="p-8 xl:w-1/3 flex flex-col justify-center items-center border-t border-b xl:border-t-0 xl:border-b-0 xl:border-l xl:border-r border-black">
                    <h1 className="text-4xl ml-16 mr-16 text-center text-zylo-blue-200">Zylo provides <b>high-quality</b>, sustainably sourced clothing for eco-conscious consumers.</h1>
                    <p className="text-xl mt-4 ml-16 mr-16 text-center">
                        For sustainable living, Zylo is your go-to for eco-friendly clothing. Our collection is for those who value the planet and want stylish, responsible choices. We offer products made with the environment in mind, ensuring your fashion contributes to a healthier planet.
                    </p>
                    <Link to="/catalog" className="bg-gradient-to-tr from-zylo-blue-400 to-zylo-blue-300 hover:from-zylo-blue-200 hover:to-zylo-blue-100 hover:text-zylo-blue-400 w-40 text-center text-sm md:text-xl text-white p-2 rounded-lg mt-4 inline-block hover:cursor-pointer">
                        Explore our catalog
                    </Link>
                </div>

                <div className="p-8 xl:w-1/3 flex flex-col justify-center items-center">
                    <h1 className="text-4xl ml-16 mr-16 text-center text-zylo-blue-400">We support <b>ethical</b> production and fair trade practices.</h1>
                    <p className="text-xl mt-4 ml-16 mr-16 text-center">
                        Urban dwellers who value the convenience of online shopping will find Zylo ideal. We make it easy for city residents to access sustainable fashion from home. Our user-friendly website and detailed product descriptions ensure a seamless shopping experience, allowing you to make informed, ethical choices effortlessly.
                    </p>
                </div>

            </div>

        </>
    )

}

export default Home;