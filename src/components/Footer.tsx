
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          {/* Logo/Nome do Clube */}
          <div className="mb-4">
            <h3 className="font-montserrat font-bold text-2xl club-text-gradient mb-2">
              Esporte Clube Internacional
            </h3>
            <p className="text-club-red font-medium text-lg">
              Time do Coração do Rio Grande
            </p>
          </div>

          {/* Redes Sociais */}
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="#"
              className="text-gray-600 hover:text-club-red transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-club-red transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-club-red transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>

          {/* Créditos */}
          <div className="text-gray-600 text-sm">
            <p>&copy; {currentYear} Esporte Clube Internacional de Santa Maria</p>
            <p className="mt-1">Sempre avante unidos iremos</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
