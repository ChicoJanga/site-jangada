import React from 'react';
import { ChefHat, Phone, MessageSquare } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const SertaoSunIcon = () => (
    <svg className="w-16 h-16 text-orange-600 opacity-20 absolute top-10 right-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );

  const JangadaIcon = () => (
    <svg className="w-20 h-20 text-orange-800 opacity-30 absolute bottom-10 left-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 17h18l-2-4H5l-2 4zM12 2l-3 6h6l-3-6zM8 9l2-3h4l2 3H8zM6 15l1-2h10l1 2H6z"/>
    </svg>
  );

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-stone-50 to-orange-50 flex items-center overflow-hidden">
      {/* Texturas de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D2691E' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Ícones decorativos */}
      <SertaoSunIcon />
      <JangadaIcon />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
                <span className="text-orange-800 font-bold text-sm uppercase tracking-wider">Desde 2010</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold text-orange-800 leading-tight">
                Um pedacinho do <span className="text-red-900">Nordeste</span> em São Paulo
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Oxente, cabra da peste! Aqui na <strong>Jangada do Velho Chico</strong> você encontra 
                a comida mais arretada de São Paulo. Baião de dois que é uma beleza, carne de sol 
                que derrete na boca e cachaças artesanais que são pura tradição nordestina.
              </p>
              
              <p className="text-lg text-gray-600">
                Venha sentir o gostinho de casa e a hospitalidade que só o povo do Nordeste sabe dar. 
                Aqui todo mundo é família!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('cardapio')}
                className="bg-orange-800 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 font-semibold"
              >
                <ChefHat size={20} />
                <span>Ver Cardápio Completo</span>
              </button>
              <button className="bg-red-900 text-white px-8 py-4 rounded-full hover:bg-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 font-semibold">
                <MessageSquare size={20} />
                <span>Reservar no WhatsApp</span>
              </button>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-2xl border-l-4 border-orange-800 shadow-lg">
              <p className="text-orange-800 font-bold text-lg flex items-center">
                <span className="text-2xl mr-2">🏆</span>
                Eleito o melhor restaurante nordestino da zona norte!
              </p>
              <p className="text-gray-600 mt-1">Mais de 13 anos servindo com amor e tradição</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-orange-200">
              <img 
                src="https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Baião de dois tradicional nordestino servido no Jangada do Velho Chico" 
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-red-900 text-white p-6 rounded-2xl shadow-lg border-4 border-white">
              <p className="font-bold text-lg">Arretado de bom!</p>
              <p className="text-sm opacity-90">Desde 2010 em Sampa</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-orange-800 text-white p-4 rounded-full shadow-lg">
              <p className="text-sm font-bold">100%</p>
              <p className="text-xs">Nordestino</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;