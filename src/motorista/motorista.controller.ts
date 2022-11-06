import { Controller, Delete, Get, Patch, Post, Put, Query, Body, Param, HttpStatus, NotFoundException} from "@nestjs/common";
import { NestResponse } from "src/core/http/nest-response";
import { NestResponseBuilder } from "src/core/http/nest-response-builder";
import { updateMotoristaDto } from "src/dto/updateMotoristaDto";
import { updateStatusMotoristaDto } from "src/dto/updateStatusMotoristaDto";
import { Motorista } from "./motorista.entity";
import { MotoristaService } from "./motorista.service";

@Controller('motorista')
export class MotoristaController{
    constructor(private service: MotoristaService){}

    @Get()
    public async getMotoristas(@Query('name') name = "", @Query('page') page = 0, @Query('size') size = 10) {
        const motorista = await this.service.getListaMotoristas(page,size)
        
        if(name !== ""){
           return await this.service.getMotoristaName(name)
        }
        return motorista;
    }

    @Get(':cpf')
    public getDetalhes(@Param('cpf') cpf) {
       const motorista = this.service.getMotoristaCPF(cpf); 
       return motorista;
    }

    @Post()
    public async createdMotorista(@Body() motorista: Motorista): Promise<NestResponse>{
        const motoristaCriado = await this.service.createMotorista(motorista)

        return new NestResponseBuilder()
        .withStatus(HttpStatus.CREATED)
        .withHeaders({ Location: `/motorista/${motoristaCriado.name}` })
        .withBody(motoristaCriado)
        .build();
    }

    @Put(':id')
    public async updateMotorista(@Param('id') id, @Body() body: updateMotoristaDto){
        const updateMotorista = await this.service.updateCadastro(id, body.name, body.licensePlate, body.model)
        return updateMotorista;
    }

    @Patch(':id')
    public async updateStatusMotorista(@Param('id') id, @Body() body : updateStatusMotoristaDto){
        const updateStatusMotorista = await this.service.updateStatus(id, body.status)
        return updateStatusMotorista;
    }

    @Delete(':id')
    public async deleteMotorista(@Param() params){
        const motoristas = await this.service.getMotoristaID(params.id)
        await this.service.deleteMotorista(params.id)
        return motoristas;
    }
}