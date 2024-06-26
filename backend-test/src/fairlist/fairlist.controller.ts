import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FairlistService } from './fairlist.service';
import { FairlistDto } from './dto';

@Controller('fairlist')
export class FairlistController {

    constructor(private fairlistService: FairlistService){}

    @Post('create')
    onCreate(@Body() dto: FairlistDto){
        return this.fairlistService.onCreate(dto);
    }

    @Get('id')
    findFairlistById(@Query('id') id: string ){
        let idN : number = +id
        return this.fairlistService.findFairlistById(idN);
    }
}
