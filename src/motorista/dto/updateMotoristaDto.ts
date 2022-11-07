import { PickType } from "@nestjs/mapped-types";
import { Motorista } from "src/motorista/motorista.entity";

export class updateMotoristaDto extends PickType(Motorista, ['name', 'licensePlate', 'model']){}