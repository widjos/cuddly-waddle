import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class FairlistDto {

    @IsNotEmpty()
    @IsString()
    cui:string

    @IsNotEmpty()
    @IsString()
    nombres:string

    @IsNotEmpty()
    @IsString()
    apellidos:string

    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNotEmpty()
    @IsDateString()
    date: string
}