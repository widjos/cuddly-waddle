import { Module } from '@nestjs/common';
import { FairlistPromoService } from './fairlist_promo.service';
import { FairlistPromoController } from './fairlist_promo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FairlistPromoService],
  controllers: [FairlistPromoController]
})
export class FairlistPromoModule {}
