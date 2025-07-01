
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { X } from 'lucide-react';

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Imagens reais do Inter-SM
  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/a77279d9-b909-4365-bf7a-5bd03dd09a7f.png",
      alt: "Estádio Presidente Vargas - Baixada Melancólica ao entardecer",
      title: "Baixada Melancólica"
    },
    {
      id: 2,
      src: "/lovable-uploads/0dc75123-5bc2-4c75-8922-76a2b9a6d6f9.png",
      alt: "Jovem torcedor do Inter-SM com a camisa do clube",
      title: "Paixão Alvirrubra"
    },
    {
      id: 3,
      src: "/lovable-uploads/3b743f36-9f27-4e97-998f-1a09a0ff7261.png",
      alt: "Torcida organizada do Inter-SM nas arquibancadas",
      title: "Torcida Fanática"
    },
    {
      id: 4,
      src: "/lovable-uploads/c2d55b94-5307-4692-bc1f-b7abb807ae2f.png",
      alt: "Lance de jogo no estádio com torcida lotada",
      title: "Em Campo"
    },
    {
      id: 5,
      src: "/lovable-uploads/1cbe6a7e-0869-4d8c-a050-d7297d42b76e.png",
      alt: "Caravana de torcedores do Inter-SM em caminhada",
      title: "Caravana Alvirrubra"
    },
    {
      id: 6,
      src: "/lovable-uploads/a1b23b85-632c-4a59-ba21-ed719c08c88d.png",
      alt: "Arquibancada lotada com torcedores vibrando",
      title: "Apoio Incondicional"
    },
    {
      id: 7,
      src: "/lovable-uploads/43ebdc07-752c-477e-aace-f66dd780de09.png",
      alt: "Torcedor celebrando nas arquibancadas",
      title: "Festa na Baixada"
    },
    {
      id: 8,
      src: "/lovable-uploads/d81bedc4-a1f7-4e75-811b-bfeba67800ab.png",
      alt: "Grupo de torcedores uniformizados",
      title: "Unidos pelo Inter"
    },
    {
      id: 9,
      src: "/lovable-uploads/deae274c-7dcc-4a24-872a-fbbe3127af28.png",
      alt: "Torcedor comemorando com bandeira do clube",
      title: "Alegria Alvirrubra"
    },
    {
      id: 10,
      src: "/lovable-uploads/83cbb59b-d6c5-472f-aa1d-87a490e29e2b.png",
      alt: "Jogo no estádio com arquibancada cheia",
      title: "Casa Cheia"
    },
    {
      id: 11,
      src: "/lovable-uploads/a04d9764-fea7-4ebe-8afa-1e482a8a4049.png",
      alt: "Jogadores do Inter-SM se concentrando antes da partida com faixa dos fanáticos ao fundo",
      title: "Concentração dos Fanáticos"
    },
    {
      id: 12,
      src: "/lovable-uploads/2d443690-db76-4062-ab3c-323226c49130.png",
      alt: "Sede do E.C. Internacional - fachada histórica do clube",
      title: "Casa do Inter"
    },
    {
      id: 13,
      src: "/lovable-uploads/949981bf-2043-4ac8-a6b7-0978f10b7716.png",
      alt: "Torcedores alvirrubros em excursão comemorando no estádio do Ypiranga",
      title: "Festa em Terras Gaúchas"
    },
    {
      id: 14,
      src: "/lovable-uploads/a2b54cde-5d51-46cf-972a-84bfa86fef80.png",
      alt: "Torcida acompanhando o jogo ao entardecer na Baixada Melancólica",
      title: "Entardecer na Baixada"
    },
    {
      id: 15,
      src: "/lovable-uploads/42271e8a-ed09-45f7-927c-ecafc6652ed1.png",
      alt: "Pôr do sol dourado no estádio Presidente Vargas durante partida do Inter-SM",
      title: "Ouro na Baixada"
    },
    {
      id: 16,
      src: "/lovable-uploads/4630b66f-cc19-43c5-bfbf-4dc23eb69203.png",
      alt: "Vista panorâmica do campo durante uma partida na Baixada Melancólica",
      title: "Partida na Baixada"
    },
    {
      id: 17,
      src: "/lovable-uploads/49ff7771-d37e-47b4-bd22-7d7e80f738c8.png",
      alt: "Galeria de fotos históricas do Inter-SM na sede do clube",
      title: "Memórias Alvirrubras"
    },
    {
      id: 18,
      src: "/lovable-uploads/746ba259-1ed7-4b76-91eb-9f7f783bdb66.png",
      alt: "Torcedores assistindo ao jogo das arquibancadas laterais",
      title: "Acompanhando de Perto"
    },
    {
      id: 19,
      src: "/lovable-uploads/897acdae-4841-4789-afa0-8b034744306e.png",
      alt: "Lance de jogo com jogadores do Inter-SM em ação no campo",
      title: "Jogada Alvirrubra"
    },
    {
      id: 20,
      src: "/lovable-uploads/f58ffdb7-e351-4277-9cd7-ee6d2ef7a0f4.png",
      alt: "Torcida apoiando o time durante a partida",
      title: "Apoio da Arquibancada"
    },
    {
      id: 21,
      src: "/lovable-uploads/bb9203f4-0935-4f8d-8fa1-724802c7b1fa.png",
      alt: "Vista artística através da rede do gol durante o jogo",
      title: "Através das Redes"
    },
    {
      id: 22,
      src: "/lovable-uploads/15257b4f-7886-4ee0-9265-682a7b4165ba.png",
      alt: "Trave do gol com vista do estádio ao fundo",
      title: "Nos Detalhes do Jogo"
    },
    {
      id: 23,
      src: "/lovable-uploads/1a221e76-7dc1-4d3e-beae-668c7902ae40.png",
      alt: "Torcedores escalando a grade para apoiar melhor o time",
      title: "Paixão sem Limites"
    },
    {
      id: 24,
      src: "/lovable-uploads/05777081-893c-4f47-8b9d-87904b72fd93.png",
      alt: "Vista do estádio Presidente Vargas durante o entardecer",
      title: "Fim de Tarde na Baixada"
    },
    {
      id: 25,
      src: "/lovable-uploads/4fa79d63-c008-4dea-ac5f-08afa834c7b5.png",
      alt: "Jogadores do Inter-SM comemorando conquista com troféu",
      title: "Glória Alvirrubra"
    }
  ];

  const openImage = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-club-red mb-6">
              Galeria de Fotos
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Momentos inesquecíveis da história do Time do Coração do Rio Grande
            </p>
          </div>
        </section>

        {/* Galeria */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="group cursor-pointer"
                  onClick={() => openImage(image.src)}
                >
                  <div className="relative overflow-hidden rounded-lg border-2 border-transparent hover:border-club-red transition-all duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Clique para ampliar
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 font-medium text-club-red text-center">
                    {image.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Seção para adicionar novas fotos */}
            <div className="mt-16 text-center">
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12">
                <h3 className="font-montserrat font-bold text-xl text-gray-600 mb-4">
                  Tem fotos para compartilhar?
                </h3>
                <p className="text-gray-500 mb-6">
                  Ajude a construir nossa galeria com momentos especiais do Inter-SM
                </p>
                <Link
                  to="/contato"
                  className="inline-block bg-club-red text-white px-6 py-3 rounded-lg font-medium hover:bg-club-red-dark transition-colors duration-200"
                >
                  Entre em Contato
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Modal/Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={closeImage}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
                onClick={closeImage}
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Imagem ampliada"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Galeria;
