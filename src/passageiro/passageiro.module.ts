import { Module } from "@nestjs/common";
import { DatabasePassageiro } from "src/database/passageiro.database";
import { DatabaseViagem } from "src/database/viagem.database";
import { PassageirosController } from "./passageiro.controller";
import { PassageiroService } from "./passageiro.service";

@Module({
    controllers: [PassageirosController],
    providers: [PassageiroService, DatabasePassageiro, DatabaseViagem],
})

export class PassageiroModule {}