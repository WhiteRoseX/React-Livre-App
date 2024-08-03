import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-xl font-bold">
          <Link to="/">ÉchangeLivre</Link>
        </div>
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div 
          className={`md:flex md:items-center md:space-x-4 absolute z-10 md:static top-16 left-0 w-full md:w-auto bg-blue-600 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block`}
        >
          <Link to="/" className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300 ease-in-out">Acceuil</Link>
          <Link to="/about" className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300 ease-in-out">À propos</Link>
          <Link to="/contact" className="block px-3 py-2 rounded-md text-white hover:bg-blue-700 transition duration-300 ease-in-out ">Contact</Link> {/* Ajoutez ce lien */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
