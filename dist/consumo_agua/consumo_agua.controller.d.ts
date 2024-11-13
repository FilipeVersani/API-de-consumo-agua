import { ConsumoAguaService } from './consumo_agua.service';
import { ConsumoAgua } from './consumo_agua.model';
export declare class ConsumoAguaController {
    private readonly consumoAguaService;
    constructor(consumoAguaService: ConsumoAguaService);
    adicionarConsumo(consumo: ConsumoAgua): {
        message: string;
    };
    listarConsumos(): ConsumoAgua[];
    listarConsumosPorData(inicio: string, fim: string): ConsumoAgua[];
    gerarAlertaConsumoElevado(userId: string): string;
}
