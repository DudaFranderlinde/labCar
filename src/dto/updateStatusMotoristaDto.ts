import { PickType } from "@nestjs/mapped-types";
import { Motorista } from "src/motorista/motorista.entity";

export class updateStatusMotoristaDto extends PickType(Motorista, ['status']){}