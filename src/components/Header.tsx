
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Ticket, Home, History, Images, Trophy, Phone, Youtube } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Início', path: '/', icon: Home },
    { name: 'História', path: '/historia', icon: History },
    { name: 'Galeria', path: '/galeria', icon: Images },
    { name: 'Jogos', path: '/jogos', icon: Trophy },
    { name: 'Vídeos', path: '/videos', icon: Youtube },
    { name: 'Contato', path: '/contato', icon: Phone },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleMobileMenuClick = () => {
    setIsMenuOpen(false);
    // Aguarda um pequeno delay para garantir que a navegação ocorra antes do scroll
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/lovable-uploads/b3ad882d-dfb1-4ece-bbc8-b9bb7f7ddbd7.png"
                alt="Esporte Clube Internacional de Santa Maria"
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="font-montserrat font-bold text-club-red hidden sm:block">
              Inter-SM
            </span>
          </Link>

          {/* #VAMOSSUBIRINTER - Centralizado */}
          <div className="hidden md:block text-club-red font-black text-sm font-mono tracking-widest transform -rotate-1 px-2 py-1 border border-club-red border-dashed bg-white shadow-sm">
            #VAMOSSUBIRINTER
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-colors duration-200 text-sm ${
                    isActive(item.path)
                      ? 'bg-club-red text-white'
                      : 'bg-club-red text-white hover:bg-club-red-dark'
                  }`}
                >
                  <IconComponent size={14} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            
            <a
              href="https://intersm.eleventickets.com/#!/home"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-club-red text-white px-3 py-2 rounded-lg font-medium hover:bg-club-red-dark transition-colors duration-200 text-sm"
            >
              <Ticket size={14} />
              <span>Ingressos</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-club-red"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {/* Mobile #VAMOSSUBIRINTER */}
            <div className="text-center mb-4">
              <span className="text-club-red font-black text-sm font-mono tracking-widest transform -rotate-1 inline-block px-2 py-1 border border-club-red border-dashed bg-white shadow-sm">
                #VAMOSSUBIRINTER
              </span>
            </div>
            
            <nav className="flex flex-col space-y-3">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 w-fit ${
                      isActive(item.path)
                        ? 'bg-club-red text-white'
                        : 'bg-club-red text-white hover:bg-club-red-dark'
                    }`}
                    onClick={handleMobileMenuClick}
                  >
                    <IconComponent size={16} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <a
                href="https://intersm.eleventickets.com/#!/home"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-club-red text-white px-4 py-2 rounded-lg font-medium hover:bg-club-red-dark transition-colors duration-200 w-fit"
                onClick={handleMobileMenuClick}
              >
                <Ticket size={16} />
                <span>Ingressos</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
