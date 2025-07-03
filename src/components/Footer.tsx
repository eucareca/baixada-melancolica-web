
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          {/* Selo de Site Não Oficial */}
          <div className="mb-6">
            <div className="inline-block bg-club-red text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg border-2 border-club-red transform -rotate-2">
              SITE FEITO POR UM FÃ, SITE NÃO OFICIAL
            </div>
          </div>

          {/* Logo/Nome do Clube */}
          <div className="mb-4">
            <h3 className="font-montserrat font-bold text-2xl club-text-gradient mb-2">
              Esporte Clube Internacional
            </h3>
            <p className="text-club-red font-medium text-lg">
              Time do Coração do Rio Grande
            </p>
          </div>

          {/* Links de Navegação */}
          <div className="flex justify-center space-x-6 mb-6">
            <Link
              to="/historia"
              className="text-gray-600 hover:text-club-red transition-colors duration-200 font-medium"
            >
              Conheça Nossa História
            </Link>
            <Link
              to="/contato"
              className="text-gray-600 hover:text-club-red transition-colors duration-200 font-medium"
            >
              Entre em Contato
            </Link>
          </div>

          {/* Redes Sociais Oficiais */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-700 mb-3">Redes Sociais Oficiais</h4>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/intersmoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-club-red transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/intersmoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-club-red transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://x.com/intersmoficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-club-red transition-colors duration-200"
                aria-label="X (Twitter)"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
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
