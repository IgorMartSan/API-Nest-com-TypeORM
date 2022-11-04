import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';
import { CourseService } from '../services/course.service';


//ESTRUTURA BÁSICA QUE TENHO QUE DECORAR
@Controller('course') // cada controller fica escutando em uma determinada rota
export class CourseController {
    //Injetando dependencia do service Curso criado, agora podemos manipular a mesma (singleton);
    constructor(private readonly courseService: CourseService) {

    }

    @Get()
    async findAll() {
        return await this.courseService.findall();
    }
    //criar um parametro dinamico (recebe pela url)
    //decoreitor "get" define a rota para: /course/id
    //O decoreitor "param" define o argumento como o dado enviado do front
    @Get(':id')
    async findOne(@Param('id') id) {
        console.log(id);
        const course = await this.courseService.findOne(id);
        console.log(course);
        return course
    }

    @Post()
    //força a resposta ser 202 que siginifica "sem conteudo"
    //@HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.create(createCourseDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() upadateCourseDto: UpdateCourseDto) {
        return this.courseService.update(id, upadateCourseDto)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.courseService.remove(id);
    }

}






