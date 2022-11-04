//Como criar:
//nest g class course/dto/CreateCourseDto

import { IsArray, IsJSON, IsNotEmpty, IsString } from "class-validator";

//Para que serve ?
//Receber dados, validar no EndPoint, e tranferir até o banco de dados

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    description: string;

 


}