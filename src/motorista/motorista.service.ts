import { ConflictException, Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { DatabaseMotorista } from "src/database/motorista.database";
import { Motorista } from "./motorista.entity";
import {v4 as uuidV4} from 'uuid'
import { Status } from "./status-motorista.enum";
import { updateMotoristaDto } from "src/motorista/dto/updateMotoristaDto";

@Injectable()
export class MotoristaService{
  constructor(private database: DatabaseMotorista) {}

  public async verificaCpf(cpf: string) {
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

  public async createMotorista(motorista: Motorista){
    const verificaMotorista = await this.verificaCpf(motorista.cpf)
    if(verificaMotorista){
      throw new ConflictException({
        statusCode: 409,
        message: 'CPF already registered as a driver',
      });
    }

    const verificaIdade = await this.verificaDataNasc(motorista.birthDate)
    if(verificaIdade < 18){
      throw new HttpException(`The driver must be of legal age`, HttpStatus.UNAUTHORIZED);
    }
    
    motorista.id = uuidV4();
    motorista.status = Status.ALLOWED;

    await this.database.salvar(motorista);
    return motorista;
  }

  public async getMotoristaCPF(cpf: string) {
    const motoristas = await this.database.getMotoristasBD();
    const findMotorista = motoristas.find(
      (motorista) => motorista.cpf == cpf
    );

    if (!findMotorista) {
      throw new HttpException(`Driver CPF ${cpf} not found`, HttpStatus.NOT_FOUND)
    }
   return findMotorista
  }

  public async getMotoristaName(name: string) {
    const motoristas = await this.database.getMotoristasBD();
    const findMotorista = motoristas.filter(
      (motorista) => motorista.name.toLowerCase().includes(name.toLowerCase()));

    if (findMotorista.length === 0) {
      throw new HttpException(`Driver ${name} not found`, HttpStatus.NOT_FOUND)
    }
   return findMotorista
  }

  public async getMotoristaID(id: string) {
    const motoristas = await this.database.getMotoristasBD();
    const findMotorista = motoristas.find(elemento=> elemento.id === id);

    if (!findMotorista) {
      throw new HttpException(`Driver ID ${id} not found`, HttpStatus.NOT_FOUND)
    }
    return findMotorista; 
  }

  public async getListaMotoristas(page: number, size: number){
    const indiceInicial = page * size;
    const indiceFinal = indiceInicial + size;
    console.log(indiceInicial);
    
    const motoristas = await this.database.getMotoristasBD()
    console.log("Tam: "+motoristas.length);
    console.log(motoristas[2]);
    
    
    if (motoristas.length > indiceInicial) {
      console.log("Entrei");
      
        if (motoristas.length > indiceFinal) {
          console.log("Entrou aqui");
          
          return motoristas.slice(indiceInicial, indiceFinal);
        } else {
          return motoristas.slice(indiceInicial, motoristas.length);
        }
    } else {
      console.log("Entrei 1");
      return [];
    }
  }

  public async updateCadastro(id : string, update : updateMotoristaDto){
    const motoristas = await this.database.getMotoristasBD();
    const motorista = await this.getMotoristaID(id)
 
    motorista.id = id;
    motorista.name = update.name;
    motorista.licensePlate = update.licensePlate;
    motorista.model = update.model;
 
    const filtrarMotorista = motoristas.filter(elemento=> elemento.id !== id);
    await this.database.gravarListaMotorista(filtrarMotorista);
    await this.database.salvar(motorista)
    return motorista;
  }

  public async updateStatus(id : string, status : Status){
    const motoristas = await this.database.getMotoristasBD();
    const motorista = await this.getMotoristaID(id);
 
    motorista.id = id;
    motorista.status = status;
 
    const filtrarMotorista = motoristas.filter(elemento=> elemento.id !== id);
    await this.database.gravarListaMotorista(filtrarMotorista);
    await this.database.salvar(motorista);
    return motorista;
  }

  public async deleteMotorista(id : string){
    const motoristas = await this.database.getMotoristasBD();
    const filtrarMotorista = motoristas.filter(elemento=> elemento.id !== id);
    await this.database.gravarListaMotorista(filtrarMotorista);
  }
}