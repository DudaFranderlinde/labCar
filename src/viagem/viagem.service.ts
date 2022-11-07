import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { DatabasePassageiro } from 'src/database/passageiro.database';
import { DatabaseViagem } from 'src/database/viagem.database';
import { createViagemDto } from './dto/createViagemDto'
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

    public async createViagem(viagem: createViagemDto){
        const verificaPassageiro = await this.verificaID(viagem.idPassageiro);
        if(!verificaPassageiro){
            throw new HttpException({
              message: 'ID passenger not found',
            }, HttpStatus.NOT_FOUND);
          }

        let createViagem : Viagem;
        
        createViagem.idPassageiro = viagem.idPassageiro;
        createViagem.id = uuidV4();
        createViagem.status = Status.CREATED;
        createViagem.origin = viagem.origin;
        createViagem.whither = viagem.whither;
    
        await this.database.salvar(createViagem);
        return createViagem   
    }
}