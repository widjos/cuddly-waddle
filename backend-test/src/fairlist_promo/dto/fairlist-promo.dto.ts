import { Type } from "class-transformer";
import { IsArray, IsNotEmpty } from "class-validator";
import { FairlistDto } from "src/fairlist/dto";
import { FairlistItemDto } from "./fairlist-item.dto";

export class FairListPromoDto {

    @IsNotEmpty()
    @IsArray()
    @Type(() => FairlistItemDto)
    listPromos: FairlistItemDto[]
} 