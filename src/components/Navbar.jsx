import { useState } from 'react';
import { Link } from 'react-router-dom';
import GreenButton from './GreenButton';

// img
import logo from '../../public/images/logo-lake.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-transparent absolute top-0 left-0 w-full z-10">
            <div className="max-w mx-auto px-4 bg-transparent">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link to="/" className="ml-5 md:ml-14">
                            <img src={logo} alt="Logo" className="h-12 w-auto lg:h-20 xl:h-24" />
                        </Link>
                    </div>
                    {/* Links de escritorio */}
                    <div className="hidden md:flex items-center space-x-3 ml-auto">
                        <Link to="/about" className="text-xl text-white hover:text-new-green transition duration-300 md:mr-5 lg:text-2xl lg:mr-10">About</Link>
                        <Link to="/accomodation" className="text-xl text-white hover:text-new-green transition duration-300 md:pr-5 lg:text-2xl lg:pr-10">Menu</Link>
                        <Link to="/boat" className="text-xl text-white hover:text-new-green transition duration-300 md:pr-5 lg:text-2xl lg:pr-10">Gallery</Link>
                        <div className="pl-0 lg:mr-12">
                        <button
                            class="bg-button-green text-white rounded-lg cursor-pointer hover:bg-green-700 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-base md:text-lg lg:text-xl"
                            onclick="window.location.href='https://example.com';">Reservation
                        </button>
                            
                        </div>
                    </div>
                    {/* Botón de menú móvil */}
                    <div className="md:hidden flex items-center ml-auto">
                        <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-6 h-6 text-white hover:text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Menú móvil */}
            <div className={`${isOpen ? 'fixed inset-0 bg-white z-50 overflow-y-auto' : 'hidden'} md:hidden`}>
                <div className="absolute top-9 left-10 text-gray-800 hover:text-red-500" onClick={() => setIsOpen(false)}>
                    <svg className="w-9 h-9 sm:w-8 sm:h-8 xs:w-6 xs:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full py-12 px-4 mt-4">
                    <Link to="/" className="block mb-6" onClick={handleLinkClick}>
                        <div className="w-full flex justify-center mb-5 flex-col">
                            <img src={logo} alt="Logo" className="mx-auto w-36 h-auto mb-10" />
                            <button
                            class="bg-button-green text-white rounded-lg cursor-pointer hover:bg-green-700 px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 text-base md:text-lg lg:text-xl"
                            onclick="window.location.href='https://google.com';">Reservation
                        </button>
                        </div>
                    </Link>
                    <Link to="/about" className="mt-5 font-inika font-normal block py-2 px-4 text-4xl text-third-green hover:bg-green-800 hover:text-white rounded-md transition duration-300 m-2" onClick={handleLinkClick}>About</Link>
                    <div className="w-full bg-second-green h-0.5"></div>
                    <Link to="/accomodation" className="mt-5 font-inika font-normal block py-2 px-4 text-4xl text-third-green hover:bg-green-800 hover:text-white rounded-md transition duration-300 m-2" onClick={handleLinkClick}>Accommodation</Link>
                    <div className="w-full bg-second-green h-0.5"></div>
                    <Link to="/boat" className="mt-5 font-inika font-normal block py-2 px-4 text-4xl text-third-green hover:bg-green-800 hover:text-white rounded-md transition duration-300 m-2" onClick={handleLinkClick}>Boat</Link>
                    <div className="w-full bg-second-green h-0.5"></div>
                    <Link to="/contact" className="mt-5 font-inika font-normal block py-2 px-4 text-4xl text-third-green hover:bg-green-800 hover:text-white rounded-md transition duration-300 m-2" onClick={handleLinkClick}>Menu</Link>
                    <div className="w-full bg-second-green h-0.5"></div>
                    <Link to="/contact" className="mt-5 font-inika font-normal block py-2 px-4 text-4xl text-third-green hover:bg-green-800 hover:text-white rounded-md transition duration-300 m-2" onClick={handleLinkClick}>Our Story</Link>
                </div>
                <div className="text-center mb-10"></div>
            </div>
        </nav>
    );
};

export default Navbar;