import { ConsumoAgua } from './consumo_agua.model';
export declare class ConsumoAguaService {
    private consumos;
    adicionarConsumo(consumo: ConsumoAgua): void;
    listarConsumos(): ConsumoAgua[];
    listarConsumosPorData(inicio: Date, fim: Date): ConsumoAgua[];
    gerarAlertaConsumoElevado(userId: string): string;
}
