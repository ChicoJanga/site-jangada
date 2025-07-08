import React from 'react';
import { Heart, Users, Award, Calendar, Trophy, Star } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: '2010',
      title: 'Fundação',
      description: 'Nasceu o sonho de trazer o Nordeste para São Paulo',
      icon: <Heart className="text-orange-800" size={20} />
    },
    {
      year: '2015',
      title: 'Cachaças Próprias',
      description: 'Lançamento da linha Cachaças Clássicas Jangada',
      icon: <Award className="text-orange-800" size={20} />
    },
    {
      year: '2020',
      title: 'Delivery Arretado',
      description: 'Expandimos para atender toda zona norte',
      icon: <Users className="text-orange-800" size={20} />
    },
    {
      year: '2023',
      title: 'Prêmio Nacional',
      description: 'Melhor restaurante nordestino da zona norte',
      icon: <Trophy className="text-orange-800" size={20} />
    }
  ];

  return (
    <section id="historia" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
            <span className="text-orange-800 font-bold text-sm uppercase tracking-wider">Nossa Jornada</span>
            <div className="w-12 h-1 bg-orange-800 rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold text-orange-800 mb-4">Nossa História de Tradição</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma jornada que começou com muita saudade de casa e o sonho de trazer os sabores 
            mais arretados do Nordeste para o coração de São Paulo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ô meu rei, a <strong>Jangada do Velho Chico</strong> nasceu em 2010 do amor pela nossa terra 
              e da saudade danada que batia no peito. Aqui não é só um restaurante não, viu? 
              É um cantinho do Nordeste que acolhe todo mundo com o carinho e a hospitalidade 
              que só a gente sabe dar.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossos pratos são feitos com ingredientes selecionados a dedo e receitas que passaram 
              de vó para mãe, de mãe para filha. Cada garfada é uma viagem de volta às nossas raízes, 
              regada com as cachaças mais puras que você já provou na vida. É tradição pura, cabra da peste!
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Aqui você encontra o verdadeiro sabor do sertão: baião de dois que é uma beleza, 
              carne de sol que derrete na boca, e um ambiente que faz qualquer nordestino se sentir em casa. 
              Venha provar e entenda por que somos referência em comida nordestina na zona norte!
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center border-2 border-orange-200">
                  <Heart className="text-orange-800" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800">Tradição</h3>
                <p className="text-sm text-gray-600">Receitas da vovó</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center border-2 border-red-200">
                  <Users className="text-red-900" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800">Família</h3>
                <p className="text-sm text-gray-600">Todo mundo é bem-vindo</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center border-2 border-yellow-200">
                  <Award className="text-yellow-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-800">Qualidade</h3>
                <p className="text-sm text-gray-600">Ingredientes selecionados</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Ambiente acolhedor do restaurante nordestino Jangada do Velho Chico" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl border-4 border-orange-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xl font-bold">Mais de 13 anos</p>
              <p className="text-sm">matando a saudade de casa</p>
            </div>
            <div className="absolute top-6 right-6 bg-orange-800 text-white px-4 py-2 rounded-full">
              <p className="text-sm font-bold">Tradição Nordestina</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 p-8 rounded-2xl border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-orange-800 text-center mb-8">Nossa Trajetória</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-lg border-2 border-orange-200">
                  {item.icon}
                </div>
                <div className="bg-orange-800 text-white px-3 py-1 rounded-full text-sm font-bold mb-2 inline-block">
                  {item.year}
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-orange-300 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;