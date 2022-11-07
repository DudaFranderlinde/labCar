import { Injectable } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";
import { Viagem } from "src/viagem/viagem.entity";

@Injectable()
export class DatabaseViagem {
    private FILENAME = 'viagens.json';

    public async getViagensBD(): Promise<Viagem[]> {
        const viagensInFile = readFileSync(this.FILENAME, 'utf-8');
        const viagens = JSON.parse(viagensInFile);
        return viagens;
      }

    public async salvar(viagem: Viagem){
      let viagens = await this.getViagensBD();
      if (!viagens) {
        viagens = [];
      }
      writeFileSync(this.FILENAME, JSON.stringify([...viagens, viagem]));
    }

    public async gravarListaViagens(viagens: Viagem[]) {
      writeFileSync(this.FILENAME, JSON.stringify(viagens));
    }
}