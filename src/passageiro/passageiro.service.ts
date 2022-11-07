import { Injectable, HttpException, HttpStatus, ConflictException } from '@nestjs/common'
import { DatabasePassageiro } from 'src/database/passageiro.database';
import { DatabaseViagem } from 'src/database/viagem.database';
import {v4 as uuidV4} from 'uuid'
import { updatePassageiroDto } from './dto/updatePassageiroDto';
import { Passageiro } from './passageiro.entity';

@Injectable()
export class PassageiroService {
    constructor(private database: DatabasePassageiro, private viagens: DatabaseViagem) {}

    public async verificaCpf(cpf: string) {
      const passageiros = await this.database.getPassageirosBD();
      return passageiros.find(
        (passageiro) => passageiro.cpf === cpf
      );
    }
    
    public async verificaDataNasc(dataNasc: string){
      const data = new Date(dataNasc);
      const dataAtual = new Date();
      const idade = dataAtual.getFullYear() - data.getFullYear();

      return idade;
    }

    public async createPassageiro(passageiro: Passageiro){
      const verificaPassageirp = await this.verificaCpf(passageiro.cpf);
      if(verificaPassageirp){
        throw new ConflictException({
          statusCode: 409,
          message: 'CPF already registered as a passenger',
        });
      }
    
      const verificaIdade = await this.verificaDataNasc(passageiro.birthDate);
      if(verificaIdade < 18){
        throw new HttpException(`The driver must be of legal age`, HttpStatus.UNAUTHORIZED);
      }
        
      passageiro.id = uuidV4();
  
      await this.database.salvar(passageiro);
      return passageiro;
    }

    public async getListaPassageiros(page: number, size: number){
      const indiceInicial = page * size;
      const indiceFinal = indiceInicial + size;
      
      const passageiros = await this.database.getPassageirosBD();
      
      if(passageiros.length > indiceInicial){
        if(passageiros.length > indiceFinal){
          return passageiros.slice(indiceInicial, indiceFinal);
        }else{
          return passageiros.slice(indiceInicial, passageiros.length);
        }
      }else{
        return [];
      }
    }

    public async getPassageiroCPF(cpf: string) {
      const passageiros = await this.database.getPassageirosBD();
      const findPassageiro = passageiros.find((passageiro) => passageiro.cpf == cpf);
  
      if (!findPassageiro) {
        throw new HttpException(`Passenger CPF ${cpf} not found`, HttpStatus.NOT_FOUND);
      }
      return findPassageiro;
    }

    public async getPassageiroID(id: string) {
      const passageiros = await this.database.getPassageirosBD();
      const findPassageiro = passageiros.find(elemento=> elemento.id === id);
  
      if (!findPassageiro) {
        throw new HttpException(`Passenger ID ${id} not found`, HttpStatus.NOT_FOUND);
      }
      return findPassageiro; 
    }

    public async updateCadastro(id : string, update : updatePassageiroDto){
      const passageiros = await this.database.getPassageirosBD();
      const passageiro = await this.getPassageiroID(id)
   
      passageiro.id = id;
      passageiro.name = update.name;
      passageiro.address = update.address;
   
      const filtrarPassageiro = passageiros.filter(elemento=> elemento.id !== id);
      await this.database.gravarListaPassageiros(filtrarPassageiro);
      await this.database.salvar(passageiro)
      return passageiro;
    }

    public async deletePassageiro(id : string){
      const viagens = await this.viagens.getViagensBD();

      const findViagem = viagens.find(passageiro=> passageiro.id === id);
      if (!findViagem) {
        throw new ConflictException({
          statusCode: 409,
          message: 'Passenger is registered on a trip',
        });
      }

      const passageiros = await this.database.getPassageirosBD();
      const filtrarPassageiro = passageiros.filter(elemento=> elemento.id !== id);
      await this.database.gravarListaPassageiros(filtrarPassageiro);
    }
}