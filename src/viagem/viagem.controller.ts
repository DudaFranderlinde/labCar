import { Controller, Post, Get, Body, HttpStatus } from '@nestjs/common'
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { Viagem } from './viagem.entity';
import { ViagemService } from './viagem.service'

@Controller('viagens')
export class ViagemController {
    constructor(private service: ViagemService) {}

    @Post()
    public async createViagem(@Body() body : Viagem) {
        const viagemCriada = await this.service.createViagem(body)

        return new NestResponseBuilder()
        .withStatus(HttpStatus.CREATED)
        .withHeaders({ Location: `/motorista/${viagemCriada.id}` })
        .withBody(viagemCriada)
        .build();
    }

    @Get()
    public async getViagens(){
        const viagens = await this.service.getViagensProximas()
        return viagens;
    }
}