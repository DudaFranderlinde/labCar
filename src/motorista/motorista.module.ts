import { Module } from "@nestjs/common";
import { DatabaseMotorista } from "src/database/motorista.database";
import { MotoristaController } from "./motorista.controller";
import { MotoristaService } from "./motorista.service";

@Module({
    controllers: [MotoristaController],
    providers: [MotoristaService, DatabaseMotorista],
})
  export class MotoristaModule {}