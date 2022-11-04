import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { CourseController } from './controller/course.controller';
import { Course } from './entities/course';
import { CourseService } from './services/course.service';

@Module({
    imports:[TypeOrmModule.forFeature([Course])],
    controllers:[CourseController],
    providers:[CourseService]
})
export class CourseModule {
    
}
