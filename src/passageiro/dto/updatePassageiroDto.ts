import { PickType } from "@nestjs/mapped-types";
import { Passageiro } from "../passageiro.entity";

export class updatePassageiroDto extends PickType(Passageiro, ['name', 'address']) {}