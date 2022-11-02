import { Controller, Delete, Get, Patch, Post, Put, Query, Body } from "@nestjs/common";
import { Motorista } from "./motorista.entity";
import { MotoristaService } from "./motorista.service";

@Controller('motorista')
export class MotoristaController{
    constructor(private service: MotoristaService){}

    @Get()
    public async getMotoristas(@Query('name') name = "", @Query('page') page = 0, @Query('size') size = 10) {
        
    }

    @Get(':cpf')
    public getDetalhes() {

    }

    @Post()
    public async reatedMotorista(@Body() motorista: Motorista){
        const motoristaCriado = await this.service.createMotorista(motorista)
        return  console.log(motoristaCriado);
    }

    @Put(':id')
    public updateMotorista(){
        
    }

    @Patch(':id')
    public updateStatusMotorista(){

    }

    @Delete(':id')
    public deleteMotorista(){

    }
}