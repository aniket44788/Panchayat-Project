// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
// import logo from "../assets/logo.png"
import logo from "../assets/panchayat.png"

import { motion, AnimatePresence } from "framer-motion";


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'Survey', path: '/survey' },
        { name: 'Candidate', path: '/candidate' },
        { name: 'Complaints', path: '/complaints' },
        { name: 'Contact', path: '/contact' },
        { name: 'Admin', path: '/admin' },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-orange-400 via-blue-700 to-green-700 shadow-lg">



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-22">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <img src={logo} alt="logo" className="h-20 w-20 object-cover" />
                        <span className="whitespace-nowrap text-white font-bold text-base sm:text-lg group-hover:text-yellow-300 transition-colors">
                            Nainapur Panchayat
                        </span>

                    </Link>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-3">
                        {menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="text-white px-4 py-2 rounded-md text-sm font-medium hover:text-yellow-400 transition-colors
                           transition-all duration-300 ease-in-out hover:scale-105"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white p-2 rounded-lg hover:bg-white hover:bg-opacity-20 transition"
                    >
                        {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}     // Right side se start
                        animate={{ x: 0 }}          // Original position pe slide
                        exit={{ x: "100%" }}        // Close hone par right side slide out
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="md:hidden fixed top-20 left-0 right-0 bg-green-600/80 backdrop-blur-lg border-t border-white/20 shadow-xl"

                    >
                        <div className="px-5 py-4 flex flex-col space-y-3">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-base font-medium px-4 py-3 rounded-md hover:bg-white/20 transition"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </nav>
    );
}

export default Navbar;
