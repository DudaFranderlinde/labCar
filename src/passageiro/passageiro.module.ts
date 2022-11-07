import { Module } from "@nestjs/common";
import { DatabasePassageiro } from "src/database/passageiro.database";
import { PassageirosController } from "./passageiro.controller";
import { PassageiroService } from "./passageiro.service";

@Module({
    controllers: [PassageirosController],
    providers: [PassageiroService, DatabasePassageiro],
})

export class PassageiroModule {}