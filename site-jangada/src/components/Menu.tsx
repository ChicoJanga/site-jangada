import React from 'react';
import { Star, Clock, DollarSign, Award, ChefHat } from 'lucide-react';

const Menu = () => {
  const dishes = [
    {
      name: "Baião de Dois Arretado",
      description: "O mais gostoso de São Paulo! Arroz, feijão de corda fresquinho, queijo coalho derretido, linguiça defumada, carne seca desfiada e temperos secretos da casa. É de comer rezando, viu!",
      price: "R$ 28,90",
      image: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=400",
      popular: true,
      label: "Mais Vendido",
      rating: 5,
      labelColor: "bg-red-600"
    },
    {
      name: "Carne de Sol com Macaxeira",
      description: "Carne de sol macia que derrete na boca, macaxeira cozida no ponto certo, manteiga de garrafa pura e vinagrete fresquinho. Prato que mata qualquer saudade de casa!",
      price: "R$ 32,90",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      popular: true,
      label: "Favorito do Chef",
      rating: 5,
      labelColor: "bg-orange-600"
    },
    {
      name: "Peixada Nordestina da Casa",
      description: "Peixe fresco do dia, pirão cremoso feito com amor, farofa crocante, arroz soltinho e salada completa. Sabor do litoral nordestino que chegou em Sampa!",
      price: "R$ 35,90",
      image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=400",
      popular: false,
      label: "Especialidade",
      rating: 4,
      labelColor: "bg-blue-600"
    },
    {
      name: "Buchada de Bode Tradicional",
      description: "Prato típico preparado com carinho e técnica ancestral. Miúdos temperados com ervas do sertão, servido com farofa especial, arroz e salada. Para os corajosos de verdade!",
      price: "R$ 29,90",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      popular: false,
      label: "Tradicional",
      rating: 4,
      labelColor: "bg-green-600"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cardapio" className="py-20 bg-gradient-to-br from-orange-50 to-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
            <span className="text-orange-800 font-bold text-sm uppercase tracking-wider">Sabores Autênticos</span>
            <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-orange-800 mb-4">Cardápio que é Pura Tradição</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pratos nordestinos autênticos preparados com ingredientes frescos e muito carinho. 
            Cada receita conta uma história, cada sabor mata uma saudade!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-orange-100 group">
              <div className="relative overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={`${dish.name} - Restaurante Jangada do Velho Chico`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-90 contrast-110 saturate-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                <div className={`absolute top-4 left-4 ${dish.labelColor} text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg`}>
                  {dish.label === "Mais Vendido" && <Award size={16} />}
                  {dish.label === "Favorito do Chef" && <ChefHat size={16} />}
                  <span>{dish.label}</span>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-orange-800 font-bold text-sm">Arretado!</span>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  {[...Array(dish.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={14} />
                  ))}
                  <span className="text-sm font-bold text-gray-700 ml-1">{dish.rating}.0</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{dish.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{dish.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-800">{dish.price}</span>
                  <button className="bg-red-900 text-white px-6 py-3 rounded-full hover:bg-red-800 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg">
                    Pedir Agora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-2xl mb-8 border-2 border-orange-200">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Quer ver tudo que temos?</h3>
            <p className="text-gray-600 mb-6">
              Nosso cardápio completo tem muito mais delícias nordestinas esperando por você! 
              Pratos executivos, sobremesas caseiras e bebidas geladas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-800 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2 font-semibold">
                <Clock size={20} />
                <span>Ver Cardápio Completo</span>
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-red-900 text-white px-8 py-4 rounded-full hover:bg-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2 font-semibold"
              >
                <span>Fazer Reserva</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;