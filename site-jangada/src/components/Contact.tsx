import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
            <span className="text-orange-800 font-bold text-sm uppercase tracking-wider">Vem nos Visitar</span>
            <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-orange-800 mb-4">Venha nos Visitar!</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos sempre de portas abertas para receber você e sua família. 
            Aqui todo mundo é bem-vindo e sai de barriga cheia e coração feliz!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-4 rounded-full border-2 border-orange-200">
                <MapPin className="text-orange-800" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Nosso Endereço</h3>
                <p className="text-gray-600 mb-3">
                  Rua das Jangadas, 123 - Tucuruvi<br />
                  São Paulo, SP - CEP: 02304-000<br />
                  <span className="text-sm text-orange-800 font-medium">Zona Norte de São Paulo</span>
                </p>
                <a 
                  href="https://maps.google.com/?q=Rua+das+Jangadas+123+Tucuruvi+São+Paulo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-900 hover:text-red-800 font-semibold transition-colors"
                >
                  <MapPin size={16} className="mr-1" />
                  Ver no Google Maps →
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-4 rounded-full border-2 border-green-200">
                <Phone className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Fale Conosco</h3>
                <p className="text-gray-600 mb-3">
                  Fixo: (11) 2345-6789<br />
                  WhatsApp: (11) 99876-5432
                </p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 font-semibold">
                  <MessageSquare size={18} />
                  <span>Reservar no WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-4 rounded-full border-2 border-blue-200">
                <Clock className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Horário de Funcionamento</h3>
                <div className="text-gray-600 space-y-1">
                  <p><span className="font-medium">Segunda a Quinta:</span> 11h às 15h e 18h às 23h</p>
                  <p><span className="font-medium">Sexta e Sábado:</span> 11h às 24h</p>
                  <p><span className="font-medium">Domingo:</span> 11h às 22h</p>
                  <p className="text-orange-800 font-medium text-sm mt-2">
                    🍽️ Almoço executivo de segunda a sexta
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-4 rounded-full border-2 border-purple-200">
                <Instagram className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 mb-2 text-lg">Redes Sociais</h3>
                <p className="text-gray-600 mb-3">Acompanhe nossas novidades e promoções!</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-purple-600 hover:text-purple-800 flex items-center space-x-1 font-medium transition-colors">
                    <Instagram size={18} />
                    <span>@jangadavelhochico</span>
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center space-x-1 font-medium transition-colors">
                    <Facebook size={18} />
                    <span>Jangada do Velho Chico</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl h-96 border-2 border-orange-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4!2d-46.6!3d-23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzAwLjAiUyA0NsKwMzYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Restaurante Jangada do Velho Chico"
            ></iframe>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-2xl border-2 border-orange-200">
            <h3 className="text-3xl font-bold text-orange-800 mb-4">Faça sua Reserva Agora!</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Garante sua mesa para saborear o melhor da culinária nordestina em São Paulo. 
              Venha matar a saudade de casa com a gente!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-900 text-white px-8 py-4 rounded-full hover:bg-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                Reservar Mesa no WhatsApp
              </button>
              <button className="bg-orange-800 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                Pedir Delivery
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-orange-100">
            <h4 className="font-bold mb-4 text-lg text-center text-orange-800">Receba novidades arretadas!</h4>
            <p className="text-gray-600 mb-4 text-sm text-center">
              Fique por dentro das promoções, novos pratos e eventos especiais!
            </p>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-1 px-4 py-3 bg-stone-50 text-gray-800 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-500 border border-orange-200"
              />
              <button className="bg-orange-800 px-6 py-3 rounded-r-full hover:bg-orange-700 transition-colors font-semibold text-white">
                Cadastrar
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Prometemos não encher sua caixa de spam, viu!
            </p>
          </div>
        </div>
      </div>

      {/* Botão flutuante WhatsApp (mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden z-40">
        <button className="bg-green-600 text-white p-4 rounded-full shadow-2xl hover:bg-green-700 transition-all duration-300 transform hover:scale-110 animate-pulse">
          <MessageSquare size={24} />
        </button>
      </div>
    </section>
  );
};

export default Contact;