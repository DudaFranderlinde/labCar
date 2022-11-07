import { Controller, Get, Post, Put, Delete, HttpStatus, Body, Query, Param } from '@nestjs/common'
import { NestResponse } from 'src/core/http/nest-response';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { Passageiro } from './passageiro.entity';
import { PassageiroService } from './passageiro.service';

@Controller('passageiros')
export class PassageirosController {
    constructor(private service: PassageiroService) {}

    @Get()
    public async getPassageiros(@Query('page') page = 0, @Query('size') size = 10){
        const passageiros = await this.service.getListaPassageiros(page, size);
        return passageiros;
    }

    @Get(':cpf')
    public async getDetalhes(@Param('cpf') cpf){
        const passageiro = await this.service.getPassageiroCPF(cpf);
        return passageiro;
    }

    @Post()
    public async createPassageiro(@Body() passageiro: Passageiro): Promise<NestResponse>{
        const passageiroCriado = await this.service.createPassageiro(passageiro);

        return new NestResponseBuilder()
        .withStatus(HttpStatus.CREATED)
        .withHeaders({ Location: `/passageiro/${passageiroCriado.name}` })
        .withBody(passageiroCriado)
        .build();
    }

    @Put(':id')
    public async updatePassageiro(@Param('id') id, @Body() body){
        const updatePassageiro = await this.service.updateCadastro(id, body);
        return updatePassageiro;
    }

    @Delete(':id')
    public async deletePassageiro(@Param('id') id){
        const passageiro = await this.service.getPassageiroID(id);
        await this.service.deletePassageiro(id);
        return passageiro;
    }
}