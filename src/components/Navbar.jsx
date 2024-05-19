import React, { useState } from 'react';
import GreenButton from './GreenButton';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            {/* Logo del sitio, puede necesitar ajustes de color según tu logo */}
                            <a href="#" className="flex items-center py-4 px-2">
                                <span className="font-semibold text-gray-800 text-lg">Navbar</span>
                            </a>
                        </div>
                        {/* Links de escritorio */}
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#" className="py-4 px-2 text-gray-800 hover:text-green-500 transition duration-300">About</a>
                            <a href="#" className="py-4 px-2 text-gray-800 hover:text-green-500 transition duration-300">Menu</a>
                            <a href="#" className="py-4 px-2 text-gray-800 hover:text-green-500 transition duration-300">Gallery</a>
                            <a href="#" className="py-4 px-2 text-gray-800 hover:text-green-500 transition duration-300">Reservation</a>
                        </div>
                    </div>
                    {/* Botón de menú móvil */}
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                            <svg className=" w-6 h-6 text-gray-800 hover:text-green-500"
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Menú móvil */}
            <div className={`${isOpen ? 'fixed inset-0 bg-white z-50' : 'hidden'} md:hidden`}>
                <button className="absolute top-9 left-10 text-gray-800 hover:text-red-500" onClick={() => setIsOpen(false)}>
                    <svg className="w-9 h-9" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                
                <div className="flex items-center justify-center w-full h-full pb-72">
                    <div className="text-center mb-20">
                        <img src="../src/img/logo.png" class="ml-28 mb-12 mt-56"/>
                        <GreenButton text="Reservation" width="250px" height="80px" fontSize="28px" backgroundColor="#8DA260"/>
                        <a href="#" className="mt-20 font-inika font-normal block py-2 px-4 text-5xl text-third-green hover:bg-green-800 hover:text-white rounded-md transition duration-300 m-7">Contact</a>
                        <div class="w-full bg-second-green h-0.5"></div>
                        <a href="#" className="mt-20 font-inika font-normal block py-2 px-4 text-5xl text-third-green hover:bg-green-800 hover:text-white rounded-md transition duration-300 m-7">Accomodation</a>
                        <div class="w-full bg-second-green h-0.5"></div>
                        <a href="#" className="mt-20 font-inika font-normal block py-2 px-4 text-5xl text-third-green hover:bg-green-800 hover:text-white rounded-md transition duration-300 m-7">Boat</a>
                        <div class="w-full bg-second-green h-0.5"></div>
                        <a href="#" className="mt-20 font-inika font-normal block py-2 px-4 text-5xl text-third-green hover:bg-green-800 hover:text-white rounded-md transition duration-300 m-7">Menu</a>
                        <div class="w-full bg-second-green h-0.5"></div>
                        <a href="#" className="mt-20 font-inika font-normal block py-2 px-4 text-5xl text-third-green hover:bg-green-800 hover:text-white rounded-md transition duration-300 m-7">Teahouse-history</a>


                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;