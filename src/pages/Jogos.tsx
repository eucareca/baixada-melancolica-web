
import React from 'react';
import Layout from '../components/Layout';
import { Calendar, MapPin, Clock, Trophy, Ticket, Youtube } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Jogos = () => {
  // Próximos jogos do Inter-SM baseados nos dados fornecidos
  const proximosJogos = [
    {
      id: 1,
      data: '2025-07-13',
      horario: '16:00',
      casa: 'Inter-SM',
      visitante: 'Santa Cruz',
      local: 'Estádio Presidente Vargas',
      cidade: 'Santa Maria',
      competicao: 'Campeonato Gaúcho A2 2025',
      rodada: '11ª Rodada'
    },
    {
      id: 2,
      data: '2025-07-16',
      horario: '19:30',
      casa: 'Brasil-FAR',
      visitante: 'Inter-SM',
      local: 'Estádio Castanheiras',
      cidade: 'Farroupilha',
      competicao: 'Campeonato Gaúcho A2 2025',
      rodada: '12ª Rodada'
    },
    {
      id: 3,
      data: '2025-07-20',
      horario: '16:00',
      casa: 'Inter-SM',
      visitante: 'Novo Hamburgo',
      local: 'Estádio Presidente Vargas',
      cidade: 'Santa Maria',
      competicao: 'Campeonato Gaúcho A2 2025',
      rodada: '13ª Rodada'
    }
  ];

  // Jogos já realizados do Inter-SM
  const jogosRealizados = [
    { data: '17/05', adversario: 'Lajeadense', resultado: '2 x 0', local: 'Casa', vitoria: true },
    { data: '25/05', adversario: 'Passo Fundo', resultado: '2 x 2', local: 'Fora', empate: true },
    { data: '28/05', adversario: 'Gramadense', resultado: '0 x 0', local: 'Fora', empate: true },
    { data: '01/06', adversario: 'Esportivo', resultado: '3 x 1', local: 'Casa', vitoria: true },
    { data: '07/06', adversario: 'Real', resultado: '1 x 0', local: 'Fora', vitoria: true },
    { data: '11/06', adversario: 'Glória', resultado: '1 x 1', local: 'Casa', empate: true },
    { data: '22/06', adversario: 'Bagé', resultado: '0 x 0', local: 'Fora', empate: true },
    { data: '29/06', adversario: 'Gaúcho', resultado: '2 x 1', local: 'Casa', vitoria: true }
  ];

  // Tabela de classificação atualizada baseada nos resultados
  const tabelaClassificacao = [
    { posicao: 1, time: 'Passo Fundo', jogos: 8, vitorias: 3, empates: 4, derrotas: 1, golsPro: 11, golsContra: 8, saldoGols: 3, pontos: 13 },
    { posicao: 2, time: 'Aimoré', jogos: 8, vitorias: 4, empates: 1, derrotas: 3, golsPro: 11, golsContra: 9, saldoGols: 2, pontos: 13 },
    { posicao: 3, time: 'Inter-SM', jogos: 8, vitorias: 4, empates: 4, derrotas: 0, golsPro: 10, golsContra: 6, saldoGols: 4, pontos: 16 },
    { posicao: 4, time: 'Veranópolis', jogos: 8, vitorias: 4, empates: 2, derrotas: 2, golsPro: 13, golsContra: 9, saldoGols: 4, pontos: 14 },
    { posicao: 5, time: 'Novo Hamburgo', jogos: 8, vitorias: 3, empates: 2, derrotas: 3, golsPro: 7, golsContra: 8, saldoGols: -1, pontos: 11 },
    { posicao: 6, time: 'Lajeadense', jogos: 8, vitorias: 3, empates: 1, derrotas: 4, golsPro: 11, golsContra: 13, saldoGols: -2, pontos: 10 },
    { posicao: 7, time: 'Brasil-FAR', jogos: 8, vitorias: 3, empates: 1, derrotas: 4, golsPro: 10, golsContra: 13, saldoGols: -3, pontos: 10 },
    { posicao: 8, time: 'Bagé', jogos: 8, vitorias: 2, empates: 3, derrotas: 3, golsPro: 6, golsContra: 7, saldoGols: -1, pontos: 9 },
    { posicao: 9, time: 'Gramadense', jogos: 8, vitorias: 2, empates: 4, derrotas: 2, golsPro: 7, golsContra: 8, saldoGols: -1, pontos: 10 },
    { posicao: 10, time: 'U.Frederiquense', jogos: 8, vitorias: 1, empates: 4, derrotas: 3, golsPro: 6, golsContra: 9, saldoGols: -3, pontos: 7 },
    { posicao: 11, time: 'Santa Cruz', jogos: 8, vitorias: 2, empates: 1, derrotas: 5, golsPro: 6, golsContra: 10, saldoGols: -4, pontos: 7 },
    { posicao: 12, time: 'Glória', jogos: 8, vitorias: 0, empates: 5, derrotas: 3, golsPro: 4, golsContra: 8, saldoGols: -4, pontos: 5 },
    { posicao: 13, time: 'Esportivo', jogos: 8, vitorias: 1, empates: 2, derrotas: 5, golsPro: 7, golsContra: 12, saldoGols: -5, pontos: 5 },
    { posicao: 14, time: 'Real', jogos: 8, vitorias: 1, empates: 1, derrotas: 6, golsPro: 3, golsContra: 9, saldoGols: -6, pontos: 4 },
    { posicao: 15, time: 'Gaúcho', jogos: 8, vitorias: 0, empates: 3, derrotas: 5, golsPro: 5, golsContra: 11, saldoGols: -6, pontos: 3 }
  ];

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderLinkJogo = (jogo: any) => {
    const isJogoEmCasa = jogo.casa === 'Inter-SM' && jogo.cidade === 'Santa Maria';
    
    if (isJogoEmCasa) {
      return (
        <a
          href="https://intersm.eleventickets.com/#!/home"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-club-red text-white px-4 py-2 rounded-lg font-medium hover:bg-club-red-dark transition-colors duration-200 text-sm"
        >
          <Ticket size={16} />
          <span>Ingressos</span>
        </a>
      );
    } else {
      return (
        <a
          href={`https://www.youtube.com/results?search_query=${jogo.casa}+futebol`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 text-sm"
        >
          <Youtube size={16} />
          <span>YouTube</span>
        </a>
      );
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-club-red mb-4">
            Jogos e Tabela
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acompanhe os jogos do Inter-SM no Campeonato Gaúcho A2 2025
          </p>
        </div>

        {/* Últimos Resultados */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Trophy className="text-club-red mr-2" size={24} />
            <h2 className="font-montserrat font-bold text-2xl text-club-red">
              Últimos Resultados
            </h2>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {jogosRealizados.slice(-4).map((jogo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">{jogo.data}</div>
                    <div className="font-bold text-lg mb-1">
                      Inter-SM vs {jogo.adversario}
                    </div>
                    <div className={`text-xl font-bold mb-2 ${
                      jogo.vitoria ? 'text-green-600' : jogo.empate ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {jogo.resultado}
                    </div>
                    <div className="text-xs text-gray-500">
                      {jogo.local === 'Casa' ? 'Em casa' : 'Fora de casa'}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Próximos Jogos */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Calendar className="text-club-red mr-2" size={24} />
            <h2 className="font-montserrat font-bold text-2xl text-club-red">
              Próximos Jogos
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proximosJogos.map((jogo) => (
              <Card key={jogo.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium">
                      {jogo.competicao}
                    </span>
                    <span className="text-xs bg-club-red text-white px-2 py-1 rounded">
                      {jogo.rodada}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-sm text-gray-600 mb-1">
                      {formatarData(jogo.data)}
                    </div>
                    <div className="flex items-center justify-center text-club-red mb-2">
                      <Clock size={16} className="mr-1" />
                      <span className="font-medium">{jogo.horario}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center flex-1">
                      <div className={`font-bold text-lg ${jogo.casa === 'Inter-SM' ? 'text-club-red' : 'text-gray-800'}`}>
                        {jogo.casa}
                      </div>
                    </div>
                    <div className="mx-4 text-2xl font-bold text-gray-400">VS</div>
                    <div className="text-center flex-1">
                      <div className={`font-bold text-lg ${jogo.visitante === 'Inter-SM' ? 'text-club-red' : 'text-gray-800'}`}>
                        {jogo.visitante}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
                    <MapPin size={14} className="mr-1" />
                    <span>{jogo.local}, {jogo.cidade}</span>
                  </div>
                  
                  <div className="text-center">
                    {renderLinkJogo(jogo)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tabela de Classificação */}
        <section>
          <div className="flex items-center mb-6">
            <Trophy className="text-club-red mr-2" size={24} />
            <h2 className="font-montserrat font-bold text-2xl text-club-red">
              Classificação - Campeonato Gaúcho A2 2025
            </h2>
          </div>
          
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12 text-center">Pos</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead className="text-center">J</TableHead>
                      <TableHead className="text-center">V</TableHead>
                      <TableHead className="text-center">E</TableHead>
                      <TableHead className="text-center">D</TableHead>
                      <TableHead className="text-center">GP</TableHead>
                      <TableHead className="text-center">GC</TableHead>
                      <TableHead className="text-center">SG</TableHead>
                      <TableHead className="text-center font-bold">Pts</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tabelaClassificacao.map((time) => (
                      <TableRow key={time.posicao} className={time.time === 'Inter-SM' ? 'bg-red-50' : ''}>
                        <TableCell className="text-center font-medium">
                          {time.posicao}
                        </TableCell>
                        <TableCell className={`font-medium ${time.time === 'Inter-SM' ? 'text-club-red font-bold' : ''}`}>
                          {time.time}
                        </TableCell>
                        <TableCell className="text-center">{time.jogos}</TableCell>
                        <TableCell className="text-center">{time.vitorias}</TableCell>
                        <TableCell className="text-center">{time.empates}</TableCell>
                        <TableCell className="text-center">{time.derrotas}</TableCell>
                        <TableCell className="text-center">{time.golsPro}</TableCell>
                        <TableCell className="text-center">{time.golsContra}</TableCell>
                        <TableCell className="text-center">{time.saldoGols}</TableCell>
                        <TableCell className="text-center font-bold">{time.pontos}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-4 text-sm text-gray-600">
            <p><strong>Legenda:</strong> J - Jogos | V - Vitórias | E - Empates | D - Derrotas | GP - Gols Pró | GC - Gols Contra | SG - Saldo de Gols | Pts - Pontos</p>
            <p className="mt-2"><strong>Última atualização:</strong> Após a 9ª rodada do Campeonato Gaúcho A2 2025</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Jogos;
