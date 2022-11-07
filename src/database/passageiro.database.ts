import { Injectable } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";
import { Passageiro } from "src/passageiro/passageiro.entity";

@Injectable()
export class DatabasePassageiro {
    private FILENAME = 'passageiros.json';

    public async getPassageirosBD(): Promise<Passageiro[]> {
        const passageirosInFile = readFileSync(this.FILENAME, 'utf-8');
        const passageiros = JSON.parse(passageirosInFile);
        return passageiros;
      }

    public async salvar(passageiro: Passageiro){
      let passageiros = await this.getPassageirosBD();
      if (!passageiros) {
        passageiros = [];
      }
      writeFileSync(this.FILENAME, JSON.stringify([...passageiros, passageiro]));
    }

    public async gravarListaPassageiros(passageiros: Passageiro[]) {
      writeFileSync(this.FILENAME, JSON.stringify(passageiros));
    }
}