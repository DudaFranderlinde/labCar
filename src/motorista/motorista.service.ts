import { Injectable } from "@nestjs/common";
import { Motorista } from "./motorista.entity";

 let motorista : Motorista[] = [];

@Injectable()
export class MotoristaService{
   
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