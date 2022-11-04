import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Course } from 'src/course/entities/course';
import { json } from 'stream/consumers';
import { Repository } from 'typeorm';
import { CreateCourseDto } from '../dto/create-course.dto';
import { UpdateCourseDto } from '../dto/update-course.dto';


// por padrão a injeção de dependência é singleton, ou seja para cada injeção teremos uma nova instância
@Injectable()
export class CourseService {

    //injetar o repositorio do banco de dados
    constructor(@InjectRepository(Course) private courseRepository: Repository<Course>) { }


    async findall() {
        return await this.courseRepository.find();
    }

    async findOne(id: number) {
        const course = await this.courseRepository.findOneBy({
            id: id
        })
        if (course == null) {
            throw new NotFoundException("O Curso ID " + id + " não foi encontrado");
        }
        return course;

    }
    //dto normalmente é usado no update e no create
    async create(createCourseDTO: CreateCourseDto) {
        const course = await this.courseRepository.create(createCourseDTO);
        return this.courseRepository.save(course);
    }
   //ok
    async update(id: string, updateCourseDTO: UpdateCourseDto) {
        const course = await this.courseRepository.preload({ id: +id, ...updateCourseDTO })
        if (course == undefined)
            throw new NotFoundException("O Curso ID " + id + " não foi encontrado")
        await this.courseRepository.update(id, course);

    }

    //ok
    async remove(id: string) {
        //{id : +id } o + ja converte a string em number
        const course = await this.courseRepository.findOneBy({ id: +id });
        if (course == null){
            throw new NotFoundException("O Curso ID " + id + " não foi encontrado");
        }
        await this.courseRepository.remove(course);

    }

}
