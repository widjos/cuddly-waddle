import { Controller, Get } from '@nestjs/common';
import { PromoService } from './promo.service';

@Controller('promo')
export class PromoController {

    constructor(private promoService:PromoService){}

    @Get('all')
    getAll(){
        return this.promoService.getAllPromo();
    }

}
