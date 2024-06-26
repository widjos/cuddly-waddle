import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FairlistDto } from './dto';

@Injectable()
export class FairlistService {

    constructor(private prisma: PrismaService){}

    async onCreate(dto: FairlistDto){

        const newFairlist = await this.prisma.fairlist.create({
            data: {
                cui: dto.cui,
                nombres: dto.nombres,
                apellidos: dto.apellidos,
                email: dto.email,
                date: new Date(dto.date)
            }
        })

        if(!newFairlist)
           console.log("Existe un error");
        
        return newFairlist;
    }

    async findFairlistById(id:number){

        const curentFairList = await this.prisma.fairlist.findUnique({
            where: {
                fairlist_id: id
            },
            include: {
                fairlist_promo_item: {
                    select: {
                        promo_id:true
                    }
                }
            }
        });

        if(!curentFairList)
            return new ForbiddenException("No existe la lista buscada");

        return  curentFairList;
    }
}
