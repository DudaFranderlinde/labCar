import { IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { Status } from "./status-viagem.enum";

export class Viagem {
    @IsString()
    id: string;

    @IsNotEmpty()
    @IsString()
    idPassageiro: string;

    @IsEnum(Status)
    status: Status;

    @IsNotEmpty()
    @IsString()
    origin: string;

    @IsNotEmpty()
    @IsString()
    whither: string;
}