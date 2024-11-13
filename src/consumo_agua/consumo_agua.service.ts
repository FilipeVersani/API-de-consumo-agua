// src/consumo_agua/consumo_agua.service.ts
import { Injectable } from '@nestjs/common';
import { ConsumoAgua } from './consumo_agua.model';

@Injectable()
export class ConsumoAguaService {
  private consumos: ConsumoAgua[] = [];

  // Adicionar um novo registro de consumo
  adicionarConsumo(consumo: ConsumoAgua) {
    this.consumos.push(consumo);
  }

  // Listar todos os registros de consumo
  listarConsumos(): ConsumoAgua[] {
    return this.consumos;
  }

  // Listar consumo de água dentro de um intervalo de datas
  listarConsumosPorData(inicio: Date, fim: Date): ConsumoAgua[] {
    return this.consumos.filter(consumo => 
      new Date(consumo.dataLeitura) >= inicio && new Date(consumo.dataLeitura) <= fim
    );
  }

  // Gerar alertas de consumo elevado
  gerarAlertaConsumoElevado(userId: string): string {
    // Filtra os registros de consumo para o usuário
    const consumosUser = this.consumos.filter(consumo => consumo.userId === userId);

    if (consumosUser.length < 2) {
      return 'Necessário pelo menos 2 registros de consumo para comparação.';
    }

    // Ordena os registros para garantir que estamos comparando o mês atual com o mês anterior
    consumosUser.sort((a, b) => new Date(b.dataLeitura).getTime() - new Date(a.dataLeitura).getTime());

    const consumoAtual = consumosUser[0];
    const consumoAnterior = consumosUser[1];

    // Verifica se o consumo atual é maior que o anterior
    if (consumoAtual.quantidade > consumoAnterior.quantidade) {
      return `Alerta: Consumo do mês atual (${consumoAtual.quantidade} m³) é maior que o mês anterior (${consumoAnterior.quantidade} m³).`;
    } else {
      return `Consumo do mês atual está dentro dos limites normais.`;
    }
  }
}
