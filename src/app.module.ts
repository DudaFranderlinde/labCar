import { Module } from '@nestjs/common';
import { MotoristaController } from './motorista/motorista.controller';

@Module({
  imports: [],
  controllers: [MotoristaController],
  providers: [],
})
export class AppModule {}
