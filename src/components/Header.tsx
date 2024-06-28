import {
    NavLink,
} from 'react-router-dom';

function Header() {

    return (
            <div className="bg-gradient-to-br from-zylo-blue-100 to-zylo-blue-400 p-8 flex justify-center items-center">
                <div className="bg-gradient-to-tl from-white to-zylo-gray p-4 xl:p-8 w-full flex flex-col xl:flex-row justify-between items-center xl:items-left rounded-lg">
                    <NavLink to="/" className="w-1/2 xl:w-1/6">
                        <img src="/zylo-logo.png" alt="Zylo Logo" />
                    </NavLink>                    
                    <div className="w-full xl:w-2/5 text-lg md:text-3xl text-zylo-blue-400 flex flex-col md:flex-row justify-between items-center mt-0 md:mt-8 xl:mt-4 xl:mt-0 xl:mr-4">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/catalog">Catalog</NavLink>
                        <NavLink to="/cart">Cart</NavLink>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </div>
                </div>
            </div>
    )

}

export default Header;