import { PickType } from "@nestjs/mapped-types";
import { Viagem } from "../viagem.entity";

export class createViagemDto extends PickType(Viagem, [ 'idPassageiro', 'origin', 'whither']) {}