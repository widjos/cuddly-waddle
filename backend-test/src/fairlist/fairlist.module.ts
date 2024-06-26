import { Module } from '@nestjs/common';
import { FairlistService } from './fairlist.service';
import { FairlistController } from './fairlist.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FairlistService],
  controllers: [FairlistController]
})
export class FairlistModule {}
