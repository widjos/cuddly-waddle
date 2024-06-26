import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FairListPromoDto } from './dto';

@Injectable()
export class FairlistPromoService {

    constructor(private prisma:PrismaService){}

    async onCreate(dto: FairListPromoDto){

        if(dto.listPromos){
            console.log("Se va crear cada uno de los enlaces");
            dto.listPromos.forEach(async element => {
                console.log(element);
                const created = await this.prisma.fairlist_promo.create({
                    data: {
                        id_fairlist: element.id_fairlist,
                        id_promo: element.id_promo
                    }
                });
            });
        }
        else
            return new ForbiddenException("La lista esta vacia");
       
    }
}
