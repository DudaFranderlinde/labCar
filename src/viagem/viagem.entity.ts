import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { Status } from "./status-viagem.enum";

export class Viagem {
    @IsNotEmpty()
    @IsString()
    @IsUUID("4")
    id: string;

    @IsNotEmpty()
    @IsString()
    idPassageiro: string;

    @IsNotEmpty()
    @IsEnum(Status)
    status: Status;

    @IsNotEmpty()
    @IsString()
    origin: string;

    @IsNotEmpty()
    @IsString()
    whither: string;
}