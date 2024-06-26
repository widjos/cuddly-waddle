import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PromoModule } from './promo/promo.module';
import { ConfigModule } from '@nestjs/config';
import { FairlistModule } from './fairlist/fairlist.module';
import { FairlistPromoModule } from './fairlist_promo/fairlist_promo.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    PrismaModule, 
    PromoModule, FairlistModule, FairlistPromoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
