import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Index = () => {
  // Próximo jogo destacado
  const proximoJogo = {
    data: '2025-01-15',
    horario: '16:00',
    casa: 'Inter-SM',
    visitante: 'Grêmio Santanense',
    local: 'Estádio Presidente Vargas',
    cidade: 'Santa Maria',
    competicao: 'Campeonato Gaúcho 2025'
  };

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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

      {/* Próximo Jogo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-club-red mb-4">
              Próximo Jogo
            </h2>
            <p className="text-xl text-gray-600">
              Não perca o próximo confronto do Inter-SM
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-3">
                <span className="text-sm text-gray-500 font-medium">
                  {proximoJogo.competicao}
                </span>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-lg text-gray-600 mb-2">
                    {formatarData(proximoJogo.data)}
                  </div>
                  <div className="flex items-center justify-center text-club-red mb-4">
                    <Clock size={20} className="mr-2" />
                    <span className="font-bold text-xl">{proximoJogo.horario}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center flex-1">
                    <div className="font-bold text-2xl text-club-red mb-2">
                      {proximoJogo.casa}
                    </div>
                    <div className="text-sm text-gray-600">Casa</div>
                  </div>
                  <div className="mx-6 text-3xl font-bold text-gray-400">VS</div>
                  <div className="text-center flex-1">
                    <div className="font-bold text-2xl text-gray-800 mb-2">
                      {proximoJogo.visitante}
                    </div>
                    <div className="text-sm text-gray-600">Visitante</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center text-gray-600 mb-6">
                  <MapPin size={18} className="mr-2" />
                  <span className="text-lg">{proximoJogo.local}, {proximoJogo.cidade}</span>
                </div>
                
                <div className="text-center">
                  <Link
                    to="/jogos"
                    className="inline-flex items-center space-x-2 bg-club-red text-white px-6 py-3 rounded-lg font-medium hover:bg-club-red-dark transition-colors duration-200"
                  >
                    <Calendar size={18} />
                    <span>Ver Todos os Jogos</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
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
            <Link
              to="/historia"
              className="bg-white text-club-red px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Conheça Nossa História
            </Link>
            <Link
              to="/contato"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-club-red transition-colors duration-200"
            >
              Entre em Contato
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
