
import React from 'react';
import Layout from '../components/Layout';
import { Calendar, MapPin, Clock, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Jogos = () => {
  // Dados dos próximos jogos (mock data baseado na estrutura da FGF)
  const proximosJogos = [
    {
      id: 1,
      data: '2025-01-15',
      horario: '16:00',
      casa: 'Inter-SM',
      visitante: 'Grêmio Santanense',
      local: 'Estádio Presidente Vargas',
      cidade: 'Santa Maria',
      competicao: 'Campeonato Gaúcho 2025',
      rodada: '1ª Rodada'
    },
    {
      id: 2,
      data: '2025-01-22',
      horario: '20:30',
      casa: 'Internacional',
      visitante: 'Inter-SM',
      local: 'Estádio Beira-Rio',
      cidade: 'Porto Alegre',
      competicao: 'Campeonato Gaúcho 2025',
      rodada: '2ª Rodada'
    },
    {
      id: 3,
      data: '2025-01-29',
      horario: '19:00',
      casa: 'Inter-SM',
      visitante: 'Juventude',
      local: 'Estádio Presidente Vargas',
      cidade: 'Santa Maria',
      competicao: 'Campeonato Gaúcho 2025',
      rodada: '3ª Rodada'
    }
  ];

  // Dados da tabela de classificação (mock data)
  const tabelaClassificacao = [
    { posicao: 1, time: 'Grêmio', jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldoGols: 0, pontos: 0 },
    { posicao: 2, time: 'Internacional', jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldoGols: 0, pontos: 0 },
    { posicao: 3, time: 'Inter-SM', jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldoGols: 0, pontos: 0 },
    { posicao: 4, time: 'Juventude', jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldoGols: 0, pontos: 0 },
    { posicao: 5, time: 'Caxias', jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldoGols: 0, pontos: 0 },
    { posicao: 6, time: 'Grêmio Santanense', jogos: 0, vitorias: 0, empates: 0, derrotas: 0, golsPro: 0, golsContra: 0, saldoGols: 0, pontos: 0 }
  ];

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
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-club-red mb-4">
            Jogos e Tabela
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Acompanhe os próximos jogos do Inter-SM e a classificação no Campeonato Gaúcho 2025
          </p>
        </div>

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
                  
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <MapPin size={14} className="mr-1" />
                    <span>{jogo.local}, {jogo.cidade}</span>
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
              Classificação - Campeonato Gaúcho 2025
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
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Jogos;
