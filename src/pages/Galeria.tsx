
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { X } from 'lucide-react';

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Imagens de exemplo - podem ser facilmente substituídas/adicionadas
  const galleryImages = [
    {
      id: 1,
      src: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*pAHJE3HmuHEttr8AZzl5kQ.jpeg",
      alt: "Estádio Presidente Vargas - Baixada Melancólica",
      title: "Baixada Melancólica"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Torcida do Inter-SM",
      title: "Torcida Alvirrubra"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1793&q=80",
      alt: "Jogadores em ação",
      title: "Em Campo"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Troféus e conquistas",
      title: "Conquistas"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Momentos históricos",
      title: "História Viva"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Treinos e preparação",
      title: "Preparação"
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
