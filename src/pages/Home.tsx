import React from 'react';

import CartItem from '../types/CartItem';

interface HomeProps {
    cart: Array<CartItem>,
    setCart: any
}

const Home: React.FC<HomeProps> = ({ cart, setCart }) => {

    return (
        <>

            <div className="flex flex-col xl:flex-row p-8 xl:p-16">

                <div className="p-8 xl:w-1/3 flex flex-col justify-center">
                    <h1 className="text-4xl ml-16 mr-16 text-center text-zylo-blue-300">Zylo provides high-quality, sustainably sourced clothing for eco-conscious consumers.</h1>
                    <p className="text-xl mt-4 ml-16 mr-16 text-center">
                        If you are committed to living sustainably, Zylo is your go-to destination for eco-friendly clothing options. Our collection is designed for those who value the planet and want to make responsible choices without compromising on style. We offer a range of products that are made with the environment in mind, ensuring that your fashion choices contribute to a healthier planet.
                    </p>
                </div>

                <div className="p-8 xl:w-1/3 flex flex-col justify-center border-t border-b xl:border-t-0 xl:border-b-0 xl:border-l xl:border-r border-black">
                    <h1 className="text-4xl ml-16 mr-16 text-center text-zylo-blue-200">Our mission is to promote a sustainable lifestyle and reduce environmental impact.</h1>
                    <p className="text-xl mt-4 ml-16 mr-16 text-center">
                        Zylo’s mission is to foster a culture of sustainability within the fashion industry. We are dedicated to making a positive impact on the environment by offering products that are ethically produced and sustainably sourced. Our focus on transparency means that you can shop with confidence, knowing exactly where your clothing comes from and the certifications it holds. Join us in our journey to promote ethical fashion and make a difference, one piece of clothing at a time.
                    </p>
                </div>

                <div className="p-8 xl:w-1/3 flex flex-col justify-center">
                    <h1 className="text-4xl ml-16 mr-16 text-center text-zylo-blue-400">We support ethical production and fair trade practices.</h1>
                    <p className="text-xl mt-4 ml-16 mr-16 text-center">
                        Urban dwellers who value the convenience of online shopping will find Zylo to be the ideal platform. We make it easy for city residents to access a variety of sustainable fashion options from the comfort of their homes. Our user-friendly website and detailed product descriptions ensure a seamless shopping experience, allowing you to make informed, ethical choices effortlessly.
                    </p>
                </div>

            </div>

        </>
    )

}

export default Home;