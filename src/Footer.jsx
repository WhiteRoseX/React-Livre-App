import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <div className="mb-6">
          <Link to="/about" className="text-white hover:text-gray-300 mx-2">
            À Propos
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300 mx-2">
            Contact
          </Link>
          <Link to="/privacy" className="text-white hover:text-gray-300 mx-2">
            Politique de Confidentialité
          </Link>
        </div>
        <div>
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} ÉchangeLivre. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
