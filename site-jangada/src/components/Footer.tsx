import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Heart, MessageSquare } from 'lucide-react';

const Footer = () => {
  const JangadaIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 17h18l-2-4H5l-2 4zM12 2l-3 6h6l-3-6zM8 9l2-3h4l2 3H8zM6 15l1-2h10l1 2H6z"/>
    </svg>
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-red-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-orange-800 text-white p-3 rounded-full">
                <JangadaIcon />
              </div>
              <div>
                <h3 className="text-xl font-bold">Jangada do Velho Chico</h3>
                <p className="text-sm text-red-200">Restaurante Nordestino</p>
              </div>
            </div>
            <p className="text-red-200 leading-relaxed">
              Tradição nordestina no coração de São Paulo desde 2010. 
              Aqui você encontra o verdadeiro sabor do sertão, cabra da peste!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-red-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-red-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Links Rápidos</h4>
            <ul className="space-y-3 text-red-200">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')} 
                  className="hover:text-white transition-colors hover:underline text-left"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cardapio')} 
                  className="hover:text-white transition-colors hover:underline text-left"
                >
                  Cardápio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('historia')} 
                  className="hover:text-white transition-colors hover:underline text-left"
                >
                  Nossa História
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('cachacas')} 
                  className="hover:text-white transition-colors hover:underline text-left"
                >
                  Cachaças
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('fotos')} 
                  className="hover:text-white transition-colors hover:underline text-left"
                >
                  Fotos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')} 
                  className="hover:text-white transition-colors hover:underline text-left"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contato</h4>
            <div className="space-y-3 text-red-200">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(11) 2345-6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare size={16} />
                <span>(11) 99876-5432</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1" />
                <div>
                  <p>Rua das Jangadas, 123</p>
                  <p>Tucuruvi, São Paulo - SP</p>
                  <a 
                    href="https://maps.google.com/?q=Rua+das+Jangadas+123+Tucuruvi+São+Paulo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-300 hover:text-orange-200 text-sm font-medium"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Funcionamento</h4>
            <div className="space-y-2 text-red-200 text-sm">
              <p><span className="font-medium">Seg - Qui:</span> 11h às 15h e 18h às 23h</p>
              <p><span className="font-medium">Sex - Sáb:</span> 11h às 24h</p>
              <p><span className="font-medium">Domingo:</span> 11h às 22h</p>
              <div className="mt-4 bg-red-800 p-3 rounded-lg">
                <p className="text-orange-300 font-semibold text-xs">
                  🍽️ Almoço executivo de segunda a sexta
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-red-300 text-sm">
              © 2024 Jangada do Velho Chico. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-4 text-red-300 text-sm">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-red-300 text-sm flex items-center justify-center space-x-1">
              <span>Feito com</span>
              <Heart size={16} className="text-orange-400" />
              <span>e muito tempero nordestino em São Paulo</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;