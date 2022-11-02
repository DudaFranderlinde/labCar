import { ConflictException, Injectable } from "@nestjs/common";
import { DatabaseMotorista } from "src/database/motorista.database";
import { Motorista } from "./motorista.entity";

 let motorista : Motorista[] = [];

@Injectable()
export class MotoristaService{
  constructor(private database: DatabaseMotorista) {}

  public async createMotorista(motorista: Motorista){
    const verificaMotorista = await this.verificaMotorista(motorista.cpf)

    if(verificaMotorista){
      throw new ConflictException({
        statusCode: 409,
        message: 'CPF já cadastrado como motorista',
      });
    }

    await this.database.salvar(motorista);
    return motorista;
  }

  public async verificaMotorista(cpf: string) {
    const cervejas = await this.database.getMotoristasBD();
    return cervejas.find(
      (cerveja) => cerveja.cpf.toLowerCase() == cpf.toLowerCase(),
    );
  }
   
  public getListaMotoristas(nome: string, page: number, size: number){
    const indiceInicial = page * size;
    const indiceFinal = indiceInicial + size;
      
    if (motorista.length > indiceInicial) {
        if (motorista.length > indiceFinal) {
          return motorista.slice(indiceInicial, indiceFinal);
        } else {
          return motorista.slice(indiceInicial, motorista.length - 1);
        }
    } else {
      return [];
    }
  }
}