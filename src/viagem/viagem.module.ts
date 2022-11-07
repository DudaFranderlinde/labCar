import {Module} from '@nestjs/common'
import { DatabasePassageiro } from 'src/database/passageiro.database';
import { DatabaseViagem } from 'src/database/viagem.database';
import { ViagemController } from './viagem.controller';
import { ViagemService } from './viagem.service';

@Module({
    controllers: [ViagemController],
    providers: [ViagemService, DatabaseViagem, DatabasePassageiro],
})
  export class ViagemModule {}