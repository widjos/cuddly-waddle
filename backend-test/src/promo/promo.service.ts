import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PromoService {

    constructor(private prisma: PrismaService){}

    async getAllPromo(){
        const promos = await this.prisma.promo.findMany();
        return promos;
    }
}
