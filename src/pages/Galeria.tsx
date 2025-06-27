
import React, { useState } from 'react';
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
                <a
                  href="/contato"
                  className="inline-block bg-club-red text-white px-6 py-3 rounded-lg font-medium hover:bg-club-red-dark transition-colors duration-200"
                >
                  Entre em Contato
                </a>
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
