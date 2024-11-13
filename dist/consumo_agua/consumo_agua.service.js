"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumoAguaService = void 0;
const common_1 = require("@nestjs/common");
let ConsumoAguaService = class ConsumoAguaService {
    constructor() {
        this.consumos = [];
    }
    adicionarConsumo(consumo) {
        this.consumos.push(consumo);
    }
    listarConsumos() {
        return this.consumos;
    }
    listarConsumosPorData(inicio, fim) {
        return this.consumos.filter(consumo => new Date(consumo.dataLeitura) >= inicio && new Date(consumo.dataLeitura) <= fim);
    }
    gerarAlertaConsumoElevado(userId) {
        const consumosUser = this.consumos.filter(consumo => consumo.userId === userId);
        if (consumosUser.length < 2) {
            return 'Necessário pelo menos 2 registros de consumo para comparação.';
        }
        consumosUser.sort((a, b) => new Date(b.dataLeitura).getTime() - new Date(a.dataLeitura).getTime());
        const consumoAtual = consumosUser[0];
        const consumoAnterior = consumosUser[1];
        if (consumoAtual.quantidade > consumoAnterior.quantidade) {
            return `Alerta: Consumo do mês atual (${consumoAtual.quantidade} m³) é maior que o mês anterior (${consumoAnterior.quantidade} m³).`;
        }
        else {
            return `Consumo do mês atual está dentro dos limites normais.`;
        }
    }
};
exports.ConsumoAguaService = ConsumoAguaService;
exports.ConsumoAguaService = ConsumoAguaService = __decorate([
    (0, common_1.Injectable)()
], ConsumoAguaService);
//# sourceMappingURL=consumo_agua.service.js.map