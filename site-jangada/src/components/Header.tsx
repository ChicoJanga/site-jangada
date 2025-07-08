import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['inicio', 'historia', 'cardapio', 'cachacas', 'fotos', 'depoimentos', 'contato']);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const JangadaIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 17h18l-2-4H5l-2 4zM12 2l-3 6h6l-3-6zM8 9l2-3h4l2 3H8zM6 15l1-2h10l1 2H6z"/>
    </svg>
  );

  return (
    <header className="bg-stone-50 shadow-lg sticky top-0 z-50 border-b-2 border-orange-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-orange-800 text-white p-3 rounded-full shadow-lg">
              <JangadaIcon />
            </div>
            <div>
              <h1 className="text-xl font-bold text-orange-800">Jangada do Velho Chico</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Restaurante Nordestino</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { id: 'inicio', label: 'Início' },
              { id: 'historia', label: 'Nossa História' },
              { id: 'cardapio', label: 'Cardápio' },
              { id: 'cachacas', label: 'Cachaças' },
              { id: 'fotos', label: 'Fotos' },
              { id: 'depoimentos', label: 'Depoimentos' },
              { id: 'contato', label: 'Contato' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-300 font-medium px-3 py-2 rounded-full ${
                  activeSection === item.id
                    ? 'text-white bg-orange-800 shadow-lg'
                    : 'text-gray-700 hover:text-orange-800 hover:bg-orange-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-red-900 text-white px-6 py-3 rounded-full hover:bg-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
              Delivery Arretado
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-orange-800 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-orange-200">
            <nav className="flex flex-col space-y-4 pt-4">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'historia', label: 'Nossa História' },
                { id: 'cardapio', label: 'Cardápio' },
                { id: 'cachacas', label: 'Cachaças' },
                { id: 'fotos', label: 'Fotos' },
                { id: 'depoimentos', label: 'Depoimentos' },
                { id: 'contato', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left transition-all duration-300 font-medium px-3 py-2 rounded-lg ${
                    activeSection === item.id
                      ? 'text-white bg-orange-800'
                      : 'text-gray-700 hover:text-orange-800 hover:bg-orange-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="bg-red-900 text-white px-6 py-3 rounded-full hover:bg-red-800 transition-colors w-full font-semibold">
                Delivery Arretado
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;