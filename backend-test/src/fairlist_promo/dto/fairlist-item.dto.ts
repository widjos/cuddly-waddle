import { IsNotEmpty, IsNumber } from "class-validator";

export class FairlistItemDto {

    @IsNotEmpty()
    @IsNumber()
    id_fairlist:number

    @IsNotEmpty()
    @IsNumber()
    id_promo:number

}