import { ConflictException, Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { DatabaseMotorista } from "src/database/motorista.database";
import { Motorista } from "./motorista.entity";
import {v4 as uuidV4} from 'uuid'
import { Status } from "./status-motorista.enum";

 //let motorista : Motorista[] = [];

@Injectable()
export class MotoristaService{
  constructor(private database: DatabaseMotorista) {}

  public async createMotorista(motorista: Motorista){
    const verificaMotorista = await this.verificaCpf(motorista.cpf)
    if(verificaMotorista){
      throw new ConflictException({
        statusCode: 409,
        message: 'CPF já está cadastrado como motorista',
      });
    }

    const verificaIdade = await this.verificaDataNasc(motorista.birthDate)
    if(verificaIdade < 18){
      throw new HttpException(`Motorista precisa ser maior de idade`, HttpStatus.UNAUTHORIZED);
    }
    motorista.id = uuidV4();
    motorista.status = Status.ALLOWED;

    await this.database.salvar(motorista);
    return motorista;
  }

  public async verificaCpf(cpf: number) {
    const motoristas = await this.database.getMotoristasBD();
    return motoristas.find(
      (motorista) => motorista.cpf == cpf
    );
  }

  public async verificaDataNasc(dataNasc: string){
    const data = new Date(dataNasc)
    const dataAtual = new Date()
    const idade = dataAtual.getFullYear() - data.getFullYear()

    return idade;
    
  }

  public async getMotoristaCPF(cpf: number) {
    const motoristas = await this.database.getMotoristasBD();
    const findMotorista = motoristas.find(
      (motorista) => motorista.cpf == cpf
    );

    if (!findMotorista) {
      throw new HttpException(`Motorista CPF ${cpf} não encontrado`, HttpStatus.NOT_FOUND)
    }
   return findMotorista
  }

  public async getListaMotoristas(page: number, size: number){
    const indiceInicial = page * size;
    const indiceFinal = indiceInicial + size;
    
    const motoristas = await this.database.getMotoristasBD()
    if (motoristas.length > indiceInicial) {
        if (motoristas.length > indiceFinal) {
          return motoristas.slice(indiceInicial, indiceFinal);
        } else {
          return motoristas.slice(indiceInicial, motoristas.length - 1);
        }
    } else {
      return [];
    }
  }

  public async updateCadastro(id : string){
    const motoristas = await this.database.getMotoristasBD();
    const filtrarMotorista = motoristas.filter(elemento=> elemento.id !== id);
    await this.database.gravarListaMotorista(filtrarMotorista)
    return filtrarMotorista;
    
  }
}