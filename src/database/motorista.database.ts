import { Injectable } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";
import { Motorista } from "src/motorista/motorista.entity";

@Injectable()
export class DatabaseMotorista {
    private FILENAME = 'motoristas.json';

    public async getMotoristasBD(): Promise<Motorista[]> {
        const motoristasInFile = await readFileSync(this.FILENAME, 'utf-8');
        const motoristas = JSON.parse(motoristasInFile);
        return motoristas;
      }

    public async salvar(motorista: Motorista){
      let motoristas = await this.getMotoristasBD();
      if (!motoristas) {
        motoristas = [];
      }
      await writeFileSync(this.FILENAME, JSON.stringify([...motoristas, motorista]));
    }
}