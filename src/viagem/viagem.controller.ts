import { Controller, Post, Body, HttpStatus } from '@nestjs/common'
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { createViagemDto } from './dto/createViagemDto'
import { ViagemService } from './viagem.service'

@Controller('viagens')
export class ViagemController {
    constructor(private service: ViagemService) {}

    @Post()
    public async createViagem(@Body() body : createViagemDto) {
        const viagemCriada = await this.service.createViagem(body)

        return new NestResponseBuilder()
        .withStatus(HttpStatus.CREATED)
        .withHeaders({ Location: `/motorista/${viagemCriada.id}` })
        .withBody(viagemCriada)
        .build();
    }
}