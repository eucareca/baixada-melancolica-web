
import React from 'react';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[70vh] overflow-hidden">
          <img
            src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*pAHJE3HmuHEttr8AZzl5kQ.jpeg"
            alt="Esporte Clube Internacional de Santa Maria"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white animate-fade-in">
              <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-4 drop-shadow-lg">
                Esporte Clube Internacional
              </h1>
              <h2 className="font-montserrat font-medium text-2xl md:text-3xl mb-6 drop-shadow-lg">
                de Santa Maria
              </h2>
              <p className="text-lg md:text-xl font-medium drop-shadow-lg">
                Sempre avante unidos iremos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apresentação */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-club-red mb-8">
              Time do Coração do Rio Grande
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Fundado em <strong className="text-club-red">1928</strong>, o Esporte Clube Internacional de Santa Maria nasceu da paixão de jovens visionários que sonhavam em criar uma equipe capaz de desafiar os grandes do futebol gaúcho.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Com quase <strong className="text-club-red">100 anos de história</strong>, o Inter-SM representa não apenas uma instituição esportiva, mas o próprio coração pulsante de Santa Maria, cidade estrategicamente localizada no centro do Rio Grande do Sul.
                </p>
                <p className="text-club-red font-medium text-lg">
                  "Uma paixão que é legado, uma esperança que é combustível."
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-club-red">
                <h3 className="font-montserrat font-bold text-xl text-club-red mb-4">
                  Principais Conquistas
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-club-red rounded-full mr-3"></span>
                    Campeão do Interior (1981)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-club-red rounded-full mr-3"></span>
                    Participação na Taça de Ouro (1982)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-club-red rounded-full mr-3"></span>
                    3º lugar no Gauchão (2008)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-club-red rounded-full mr-3"></span>
                    Revelação de Oreco - Copa do Mundo 1958
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 club-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Faça Parte da Nossa História
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Conheça mais sobre os 96 anos de tradição, paixão e conquistas do clube que é o verdadeiro Time do Coração do Rio Grande.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/historia"
              className="bg-white text-club-red px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Conheça Nossa História
            </a>
            <a
              href="/contato"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-club-red transition-colors duration-200"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
