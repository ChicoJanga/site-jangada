import React, { useState } from 'react';
import { Award, Leaf, TreePine, X, Info } from 'lucide-react';

const Cachacas = () => {
  const [selectedCachaca, setSelectedCachaca] = useState<number | null>(null);

  const cachacas = [
    {
      name: "Jangada Cristal",
      description: "Nossa cachaça cristalina é destilada em alambique de cobre tradicional, seguindo técnicas centenárias do sertão. Sabor suave e refrescante, com notas florais delicadas. Perfeita para caipirinhas e drinks que pedem leveza e pureza.",
      details: "Destilação: Alambique de cobre • Origem: Cana-de-açúcar selecionada • Teor alcoólico: 40%",
      icon: <Award className="text-blue-600" size={32} />,
      price: "R$ 45,90",
      image: "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=400",
      technicalSheet: {
        origin: "Engenho próprio - Sertão de Pernambuco",
        distillation: "Alambique de cobre artesanal",
        aging: "Sem envelhecimento - Cristalina pura",
        alcohol: "40% vol.",
        notes: "Notas florais, frescor cítrico, final limpo",
        serving: "Ideal para caipirinhas e drinks refrescantes"
      }
    },
    {
      name: "Jangada Umburana",
      description: "Envelhecida por 2 anos em barris de umburana, madeira típica da caatinga nordestina. Adquire aroma único e sabor inconfundível, com notas amadeiradas e levemente adocicadas que remetem ao sertão. Uma verdadeira joia artesanal!",
      details: "Envelhecimento: 2 anos em umburana • Origem: Caatinga nordestina • Notas: Amadeiradas e frutadas",
      icon: <Leaf className="text-amber-600" size={32} />,
      price: "R$ 65,90",
      image: "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=400",
      technicalSheet: {
        origin: "Engenho próprio - Caatinga de Pernambuco",
        distillation: "Alambique de cobre tradicional",
        aging: "2 anos em barris de umburana da caatinga",
        alcohol: "42% vol.",
        notes: "Amadeirado, baunilha, mel silvestre, final persistente",
        serving: "Degustação pura ou com gelo, harmoniza com queijos"
      }
    },
    {
      name: "Jangada Carvalho Premium",
      description: "Nossa cachaça premium envelhecida por 3 anos em barris de carvalho francês. Sabor complexo e encorpado, com notas de baunilha e especiarias. Para apreciadores exigentes que buscam uma experiência única e sofisticada.",
      details: "Envelhecimento: 3 anos em carvalho francês • Produção: Limitada • Notas: Baunilha e especiarias",
      icon: <TreePine className="text-green-600" size={32} />,
      price: "R$ 85,90",
      image: "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=400",
      technicalSheet: {
        origin: "Engenho próprio - Seleção especial",
        distillation: "Alambique de cobre centenário",
        aging: "3 anos em barris de carvalho francês",
        alcohol: "43% vol.",
        notes: "Baunilha, especiarias, chocolate, final longo e elegante",
        serving: "Degustação pura, temperatura ambiente, taça de conhaque"
      }
    }
  ];

  const openModal = (index: number) => {
    setSelectedCachaca(index);
  };

  const closeModal = () => {
    setSelectedCachaca(null);
  };

  return (
    <section id="cachacas" className="py-20 bg-gradient-to-br from-stone-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
            <span className="text-orange-800 font-bold text-sm uppercase tracking-wider">Tradição Artesanal</span>
            <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-orange-800 mb-4">Cachaças Clássicas Jangada</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa linha exclusiva de cachaças artesanais, produzidas com técnicas tradicionais do sertão 
            e ingredientes selecionados. Cada gole é uma viagem às raízes nordestinas, cabra da peste!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cachacas.map((cachaca, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-orange-100 group">
              <div className="relative overflow-hidden">
                <img 
                  src={cachaca.image} 
                  alt={`${cachaca.name} - Cachaça artesanal Jangada do Velho Chico`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {cachaca.icon}
                </div>
                <div className="absolute bottom-4 left-4 bg-orange-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                  100% Artesanal
                </div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  PREMIUM
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{cachaca.name}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{cachaca.description}</p>
                
                <div className="bg-orange-50 p-3 rounded-lg mb-4 border-l-4 border-orange-800">
                  <p className="text-xs text-gray-600 font-medium">{cachaca.details}</p>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-orange-800">{cachaca.price}</span>
                  <button className="bg-red-900 text-white px-4 py-2 rounded-full hover:bg-red-800 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg">
                    Comprar
                  </button>
                </div>

                <button 
                  onClick={() => openModal(index)}
                  className="w-full bg-orange-100 text-orange-800 px-4 py-2 rounded-full hover:bg-orange-200 transition-all duration-300 font-semibold flex items-center justify-center space-x-2"
                >
                  <Info size={16} />
                  <span>Ficha Técnica</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-2xl border-2 border-orange-200">
            <div className="flex items-center justify-center mb-4">
              <Award className="text-orange-800 mr-3" size={32} />
              <h3 className="text-2xl font-bold text-orange-800">Prêmio Melhor Cachaça Artesanal 2023</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Reconhecida nacionalmente pela qualidade excepcional e tradição na produção artesanal
            </p>
            <p className="text-orange-800 font-semibold">
              "Uma cachaça que honra as tradições do sertão nordestino" - Revista Cachaça Brasil
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedCachaca !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-orange-800">{cachacas[selectedCachaca].name}</h3>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <img 
                  src={cachacas[selectedCachaca].image} 
                  alt={cachacas[selectedCachaca].name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Origem</h4>
                    <p className="text-gray-600 text-sm">{cachacas[selectedCachaca].technicalSheet.origin}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Destilação</h4>
                    <p className="text-gray-600 text-sm">{cachacas[selectedCachaca].technicalSheet.distillation}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Envelhecimento</h4>
                    <p className="text-gray-600 text-sm">{cachacas[selectedCachaca].technicalSheet.aging}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Teor Alcoólico</h4>
                    <p className="text-gray-600 text-sm">{cachacas[selectedCachaca].technicalSheet.alcohol}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Notas de Degustação</h4>
                  <p className="text-gray-600 text-sm">{cachacas[selectedCachaca].technicalSheet.notes}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Como Servir</h4>
                  <p className="text-gray-600 text-sm">{cachacas[selectedCachaca].technicalSheet.serving}</p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <span className="text-3xl font-bold text-orange-800">{cachacas[selectedCachaca].price}</span>
                <button className="bg-red-900 text-white px-8 py-3 rounded-full hover:bg-red-800 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg">
                  Comprar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cachacas;