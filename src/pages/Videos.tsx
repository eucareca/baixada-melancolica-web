
import React from 'react';
import Layout from '../components/Layout';
import { Youtube, Play, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Videos = () => {
  const videoCategories = [
    {
      title: 'Jogos e Melhores Momentos',
      description: 'Reviva os melhores momentos dos jogos do Inter-SM',
      icon: Play,
      color: 'bg-red-500'
    },
    {
      title: 'Histórias e Documentários',
      description: 'Conheça a rica história do clube através de documentários',
      icon: Youtube,
      color: 'bg-blue-500'
    },
    {
      title: 'Entrevistas e Bastidores',
      description: 'Entrevistas exclusivas com jogadores e comissão técnica',
      icon: ExternalLink,
      color: 'bg-green-500'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 club-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Youtube size={48} className="mr-4" />
              <h1 className="font-montserrat font-bold text-4xl md:text-6xl">
                Vídeos Inter-SM
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Acompanhe todos os momentos especiais do Esporte Clube Internacional de Santa Maria
            </p>
            <a
              href="https://www.youtube.com/results?search_query=inter-sm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-club-red px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              <Youtube size={20} />
              <span>Ver no YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-club-red mb-4">
              Categorias de Vídeos
            </h2>
            <p className="text-xl text-gray-600">
              Explore diferentes tipos de conteúdo do Inter-SM
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videoCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent size={28} className="text-white" />
                    </div>
                    <CardTitle className="text-xl font-montserrat">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center mb-6">
                      {category.description}
                    </p>
                    <div className="text-center">
                      <a
                        href={`https://www.youtube.com/results?search_query=inter-sm+${category.title.toLowerCase().replace(/\s+/g, '+')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-club-red hover:bg-club-red-dark">
                          <ExternalLink size={16} className="mr-2" />
                          Assistir
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-club-red mb-4">
              Conteúdo em Destaque
            </h2>
            <p className="text-xl text-gray-600">
              Os momentos mais marcantes do Inter-SM
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-club-red rounded-full flex items-center justify-center">
                    <Play size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl">Jogos Históricos</h3>
                    <p className="text-gray-600">Reviva os momentos mais emocionantes</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Assista aos jogos mais marcantes da história do Inter-SM, incluindo conquistas históricas e partidas emocionantes.
                </p>
                <a
                  href="https://www.youtube.com/results?search_query=inter-sm+jogos+hist%C3%B3ricos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-club-red text-club-red hover:bg-club-red hover:text-white">
                    <Youtube size={16} className="mr-2" />
                    Assistir Jogos
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-club-red rounded-full flex items-center justify-center">
                    <Youtube size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-xl">Documentários</h3>
                    <p className="text-gray-600">A história completa do clube</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Conheça a rica história de quase 100 anos do Inter-SM através de documentários exclusivos e entrevistas.
                </p>
                <a
                  href="https://www.youtube.com/results?search_query=inter-sm+document%C3%A1rio+hist%C3%B3ria"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-club-red text-club-red hover:bg-club-red hover:text-white">
                    <ExternalLink size={16} className="mr-2" />
                    Ver Documentários
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 club-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-6">
            Não Perca Nenhum Momento
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Acompanhe todos os vídeos e momentos especiais do Inter-SM no YouTube
          </p>
          <a
            href="https://www.youtube.com/results?search_query=inter-sm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-club-red px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
          >
            <Youtube size={20} />
            <span>Explorar Todos os Vídeos</span>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
