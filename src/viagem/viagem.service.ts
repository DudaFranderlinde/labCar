import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { DatabasePassageiro } from 'src/database/passageiro.database';
import { DatabaseViagem } from 'src/database/viagem.database';
import {v4 as uuidV4} from 'uuid';
import { Status } from './status-viagem.enum';
import { Viagem } from './viagem.entity';

@Injectable()
export class ViagemService {
    constructor(private database: DatabaseViagem, private passageiros: DatabasePassageiro) {}

    public async verificaID(id: string) {
        const passageiros = await this.passageiros.getPassageirosBD();
        return passageiros.find(
          (elemento) => elemento.id === id
        );
      }

    public async createViagem(viagem: Viagem){
        const verificaPassageiro = await this.verificaID(viagem.idPassageiro);
        if(!verificaPassageiro){
            throw new HttpException({
              message: 'ID passenger not found',
            }, HttpStatus.NOT_FOUND);
          }

        
        viagem.idPassageiro = viagem.idPassageiro;
        viagem.id = uuidV4();
        viagem.idMotorista = "";
        viagem.status = Status.CREATED;
        viagem.origin = viagem.origin;
        viagem.whither = viagem.whither;
    
        await this.database.salvar(viagem);
        return viagem;   
    }

    public async getViagensProximas(){
      const viagens = await this.database.getViagensBD();
      if(viagens.length === 0){
        throw new HttpException(`Trip not found`, HttpStatus.NOT_FOUND);
      }
      const indiceFinal = Math.floor(Math.random() * 10)
      
      return viagens.slice(0, indiceFinal);
    }
}