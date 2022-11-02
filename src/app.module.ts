import { Module } from '@nestjs/common';
import { DatabaseMotorista } from './database/motorista.database';
import { MotoristaController } from './motorista/motorista.controller';
import { MotoristaModule } from './motorista/motorista.module';
import { MotoristaService } from './motorista/motorista.service';

@Module({
  imports: [],
  controllers: [MotoristaController],
  providers: [MotoristaService, DatabaseMotorista],
})
export class AppModule {}
