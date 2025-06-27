
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderemos em breve.",
    });

    // Limpar formulário após envio
    setFormData({
      nome: '',
      email: '',
      mensagem: ''
    });
  };

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-club-red mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Fale conosco e faça parte da família alvirrubra
            </p>
          </div>
        </section>

        {/* Conteúdo Principal */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Formulário */}
              <div>
                <h2 className="font-montserrat font-bold text-3xl text-club-red mb-8">
                  Envie sua Mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-club-red focus:border-club-red transition-colors duration-200"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-club-red focus:border-club-red transition-colors duration-200"
                      placeholder="Digite seu e-mail"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-club-red focus:border-club-red transition-colors duration-200 resize-vertical"
                      placeholder="Digite sua mensagem"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-club-red text-white px-6 py-3 rounded-lg font-medium hover:bg-club-red-dark transition-colors duration-200"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              {/* Informações de Contato */}
              <div>
                <h2 className="font-montserrat font-bold text-3xl text-club-red mb-8">
                  Informações de Contato
                </h2>

                <div className="space-y-8">
                  {/* E-mail */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-club-red p-3 rounded-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">E-mail Oficial</h3>
                      <a
                        href="mailto:torcida.alvirrubra@gmail.com"
                        className="text-club-red hover:text-club-red-dark transition-colors duration-200"
                      >
                        torcida.alvirrubra@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Localização */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-club-red p-3 rounded-lg">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Estádio</h3>
                      <p className="text-gray-600">
                        Estádio Presidente Vargas<br />
                        "Baixada Melancólica"<br />
                        Santa Maria - RS
                      </p>
                    </div>
                  </div>

                  {/* Redes Sociais */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-club-red p-3 rounded-lg">
                      <span className="text-white font-bold">@</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Redes Sociais Oficiais</h3>
                      <div className="flex space-x-4">
                        <a
                          href="https://www.facebook.com/intersmoficial"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 p-3 rounded-lg hover:bg-club-red hover:text-white transition-colors duration-200"
                          aria-label="Facebook"
                        >
                          <Facebook size={20} />
                        </a>
                        <a
                          href="https://www.instagram.com/intersmoficial/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 p-3 rounded-lg hover:bg-club-red hover:text-white transition-colors duration-200"
                          aria-label="Instagram"
                        >
                          <Instagram size={20} />
                        </a>
                        <a
                          href="https://x.com/intersmoficial"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 p-3 rounded-lg hover:bg-club-red hover:text-white transition-colors duration-200"
                          aria-label="Twitter"
                        >
                          <Twitter size={20} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Mapa */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Localização</h3>
                    <div className="rounded-lg overflow-hidden border border-gray-200">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732.9784354718204!2d-53.82564832215861!3d-29.692030068907897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cc9ff7eb2bc3%3A0xacf8ae2e1e78b0cb!2sEst%C3%A1dio%20Presidente%20Vargas%20(Baixada%20Melanc%C3%B3lica)%20(Acesso%20Leste)!5e0!3m2!1spt-BR!2sbr!4v1751030838319!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização do Estádio Presidente Vargas"
                      />
                    </div>
                  </div>
                </div>

                {/* Mensagem adicional */}
                <div className="mt-12 p-6 bg-gray-50 rounded-lg border-l-4 border-club-red">
                  <h3 className="font-montserrat font-bold text-lg text-club-red mb-3">
                    Seja parte da nossa história!
                  </h3>
                  <p className="text-gray-700">
                    Entre em contato conosco para saber mais sobre o clube, participar de eventos, 
                    contribuir com a nossa história ou tirar dúvidas. Estamos sempre abertos ao diálogo 
                    com nossa torcida e comunidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contato;
