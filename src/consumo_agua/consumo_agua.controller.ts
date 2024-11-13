// src/consumo_agua/consumo_agua.controller.ts
import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ConsumoAguaService } from './consumo_agua.service';
import { ConsumoAgua } from './consumo_agua.model';

@Controller('consumo_agua')
export class ConsumoAguaController {
  constructor(private readonly consumoAguaService: ConsumoAguaService) {}

  // Rota para adicionar um novo registro de consumo
  @Post()
  adicionarConsumo(@Body() consumo: ConsumoAgua) {
    this.consumoAguaService.adicionarConsumo(consumo);
    return { message: 'Registro de consumo adicionado com sucesso!' };
  }

  // Rota para listar todos os registros de consumo
  @Get()
  listarConsumos() {
    return this.consumoAguaService.listarConsumos();
  }

  // Rota para consultar o histórico de consumo em um intervalo de datas
  @Get('historico')
  listarConsumosPorData(
    @Query('inicio') inicio: string, 
    @Query('fim') fim: string
  ) {
    const dataInicio = new Date(inicio);
    const dataFim = new Date(fim);
    return this.consumoAguaService.listarConsumosPorData(dataInicio, dataFim);
  }

  // Rota para gerar alerta de consumo elevado
  @Get('alerta')
  gerarAlertaConsumoElevado(@Query('userId') userId: string) {
    return this.consumoAguaService.gerarAlertaConsumoElevado(userId);
  }
}
