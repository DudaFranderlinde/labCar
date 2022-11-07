import { Module } from "@nestjs/common";
import { DatabaseMotorista } from "src/database/motorista.database";
import { DatabaseViagem } from "src/database/viagem.database";
import { MotoristaController } from "./motorista.controller";
import { MotoristaService } from "./motorista.service";

@Module({
    controllers: [MotoristaController],
    providers: [MotoristaService, DatabaseMotorista, DatabaseViagem],
})
  export class MotoristaModule {}