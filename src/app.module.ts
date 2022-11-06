import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformResponseInterceptor } from './core/http/transform-response-interceptor';
import { MotoristaModule } from './motorista/motorista.module';

@Module({
  imports: [MotoristaModule],
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
