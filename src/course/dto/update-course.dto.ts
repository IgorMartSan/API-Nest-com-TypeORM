import { IsString, IsArray, IsNotEmpty, Length, IsJSON} from "class-validator";

export class UpdateCourseDto {
    @IsString()
    @IsNotEmpty()
    name?: string;
    @IsString()
    description?: string;
    

}
