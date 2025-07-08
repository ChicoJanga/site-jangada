import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      location: "Tucuruvi, SP",
      rating: 5,
      comment: "Oxente, que comida arretada! O baião de dois é sensacional, igualzinho o da minha vó lá no Ceará. O atendimento é sempre muito carinhoso, me sinto em casa. Virei cliente fiel e sempre trago a família!",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "João Santos",
      location: "Santana, SP",
      rating: 5,
      comment: "As cachaças Jangada são espetaculares, cabra da peste! A Umburana tem um sabor único que me lembra do sertão. Ambiente familiar e acolhedor, aqui todo mundo é tratado como família mesmo.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Ana Oliveira",
      location: "Vila Guilherme, SP",
      rating: 5,
      comment: "Descobri o restaurante pelo delivery e me apaixonei! A carne de sol com macaxeira é divina, derrete na boca. Agora sempre venho presencialmente com a família. É tradição nordestina pura!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Carlos Mendes",
      location: "Jaçanã, SP",
      rating: 5,
      comment: "Melhor buchada de bode que já comi em São Paulo! O tempero é perfeito, igual ao da minha terra natal. O ambiente é super aconchegante e os preços são justos. Recomendo demais!",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Fernanda Costa",
      location: "Mandaqui, SP",
      rating: 5,
      comment: "Que lugar maravilhoso! A peixada nordestina é de comer rezando. As cachaças são artesanais de verdade, você sente a qualidade. Atendimento nota 10, pessoal super simpático!",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-orange-50 to-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
            <span className="text-orange-800 font-bold text-sm uppercase tracking-wider">Quem Provou Aprovou</span>
            <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-orange-800 mb-4">O que nossos clientes falam</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais de 1000 avaliações positivas de clientes que se apaixonaram pelo verdadeiro sabor nordestino. 
            Vem ver por que somos referência na zona norte!
          </p>
        </div>

        {/* Slider de depoimentos */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-orange-100 min-h-[300px] flex items-center">
            <div className="w-full">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={`${testimonials[currentTestimonial].name} - Cliente satisfeito`}
                  className="w-20 h-20 rounded-full object-cover mr-6 border-4 border-orange-200 shadow-lg"
                />
                <div>
                  <h3 className="font-bold text-gray-800 text-xl">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-gray-600 mb-2">{testimonials[currentTestimonial].location}</p>
                  <div className="flex">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="text-orange-200 absolute -top-4 -left-4" size={40} />
                <p className="text-gray-700 italic text-lg leading-relaxed pl-8">
                  {testimonials[currentTestimonial].comment}
                </p>
              </div>
            </div>
          </div>

          {/* Controles do slider */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="text-orange-800" size={24} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="text-orange-800" size={24} />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-orange-800 scale-125' : 'bg-orange-300 hover:bg-orange-500'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-2xl border-2 border-orange-200">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={28} />
                ))}
              </div>
              <span className="text-4xl font-bold text-orange-800">4.9</span>
            </div>
            <p className="text-gray-600 mb-2 text-lg font-semibold">Média de avaliações no Google</p>
            <p className="text-orange-800 font-medium text-lg">
              "O melhor restaurante nordestino da zona norte de São Paulo!"
            </p>
            <p className="text-gray-500 text-sm mt-2">Baseado em mais de 1.200 avaliações</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;