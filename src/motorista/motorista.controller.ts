import { Controller, Delete, Get, Patch, Post, Put, Query } from "@nestjs/common";

@Controller('motorista')
export class MotoristaController{
    constructor(){}

    @Get()
    public getMotoristas(@Query('name') name = "", @Query('page') page = 0, @Query('size') size = 10) {
        
    }

    @Get(':cpf')
    public getDetalhes() {

    }

    @Post()
    public createdMotorista(){

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