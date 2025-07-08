import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);

  const images = [
    {
      src: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Ambiente interno acolhedor do restaurante nordestino",
      category: "Ambiente"
    },
    {
      src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Pratos típicos nordestinos servidos com amor",
      category: "Pratos"
    },
    {
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Carne de sol com macaxeira tradicional do sertão",
      category: "Pratos"
    },
    {
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Clientes satisfeitos e felizes no restaurante",
      category: "Clientes"
    },
    {
      src: "https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Baião de dois arretado da casa",
      category: "Pratos"
    },
    {
      src: "https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "Área externa com decoração nordestina autêntica",
      category: "Ambiente"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(images.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(images.length / 3)) % Math.ceil(images.length / 3));
  };

  const openLightbox = (index: number) => {
    setLightboxImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxImage((prev) => (prev + 1) % images.length);
  };

  const prevLightboxImage = () => {
    setLightboxImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="fotos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
            <span className="text-orange-800 font-bold text-sm uppercase tracking-wider">Nossos Momentos</span>
            <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-orange-800 mb-4">Galeria de Momentos Especiais</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nosso ambiente acolhedor, os pratos que fazem a diferença e os sorrisos 
            de quem já provou o verdadeiro sabor do Nordeste em São Paulo
          </p>
        </div>

        {/* Carrossel */}
        <div className="relative mb-8">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(images.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
                    {images.slice(slideIndex * 3, slideIndex * 3 + 3).map((image, index) => {
                      const actualIndex = slideIndex * 3 + index;
                      return (
                        <div 
                          key={actualIndex} 
                          className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 cursor-pointer"
                          onClick={() => openLightbox(actualIndex)}
                        >
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-95 contrast-105 saturate-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 text-white">
                              <div className="bg-orange-800 px-3 py-1 rounded-full text-sm font-bold mb-2">
                                {image.category}
                              </div>
                              <p className="text-sm font-medium">{image.alt}</p>
                            </div>
                          </div>
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-orange-800 font-bold text-sm">Arretado!</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles do carrossel */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="text-orange-800" size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="text-orange-800" size={24} />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(images.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-orange-800 scale-125' : 'bg-orange-300 hover:bg-orange-500'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-orange-50 p-8 rounded-2xl border-2 border-orange-200 mb-8">
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Quer ver mais da nossa casa?</h3>
            <p className="text-gray-600 mb-6">
              Temos muito mais fotos dos nossos pratos deliciosos, ambiente acolhedor e momentos especiais! 
              Acompanhe nosso Instagram para ver as novidades diárias.
            </p>
            <button className="bg-orange-800 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center space-x-2 font-semibold">
              <Camera size={20} />
              <span>Ver Mais Fotos no Instagram</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full p-4">
            <img 
              src={images[lightboxImage].src} 
              alt={images[lightboxImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <X size={24} />
            </button>
            
            <button 
              onClick={prevLightboxImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextLightboxImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              <p className="text-sm">{lightboxImage + 1} / {images.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;