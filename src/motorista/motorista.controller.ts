import { Controller, Delete, Get, Patch, Post, Put, Query, Body, Param} from "@nestjs/common";
import { Motorista } from "./motorista.entity";
import { MotoristaService } from "./motorista.service";

@Controller('motorista')
export class MotoristaController{
    constructor(private service: MotoristaService){}

    @Get()
    public async getMotoristas(@Query('name') name = "", @Query('page') page = 0, @Query('size') size = 10) {
        const motorista = await this.service.getListaMotoristas(page,size)
        if(name !== "" && typeof name === 'string'){
            return motorista.filter(elemento => elemento.name.toLowerCase() == name.toLowerCase())
        }
        return motorista;
    }

    @Get(':cpf')
    public getDetalhes(@Param() params) {
       const motorista = this.service.getMotoristaCPF(params.cpf); 
       return motorista;
    }

    @Post()
    public async createdMotorista(@Body() motorista: Motorista){
        const motoristaCriado = await this.service.createMotorista(motorista)
        console.log(motoristaCriado);
        return motoristaCriado;
    }

    @Put(':id')
    public async updateMotorista(@Param() params, @Body() body){
        //criar um objeto para atulizar motorista dto
       return await this.service.updateCadastro(params.id)
    }

    @Patch(':id')
    public updateStatusMotorista(){

    }

    @Delete(':id')
    public async deleteMotorista(@Param() params){
        return await this.service.deleteMotorista(params.id)
    }
}