import { Body, Controller, Post } from '@nestjs/common';
import { FairlistPromoService } from './fairlist_promo.service';
import { FairListPromoDto } from './dto';

@Controller('fairlist-promo')
export class FairlistPromoController {

    constructor(private fairlistPromoService: FairlistPromoService){}

    @Post("create")
    onCreate(@Body() dto:FairListPromoDto){
        return this.fairlistPromoService.onCreate(dto);
    }
}
