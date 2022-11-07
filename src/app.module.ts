import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformResponseInterceptor } from './core/http/transform-response-interceptor';
import { MotoristaModule } from './motorista/motorista.module';
import { PassageiroModule } from './passageiro/passageiro.module';
import { ViagemModule } from './viagem/viagem.module';

@Module({
  imports: [ MotoristaModule, PassageiroModule, ViagemModule],
  controllers: [],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: TransformResponseInterceptor,
  },],
})
export class AppModule {}
