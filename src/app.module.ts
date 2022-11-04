import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { CourseModule } from './course/course.module';



@Module({ // decoretor ou anaotatios atribui metadados para que o nest saiba
  imports: [CourseModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'test',
    autoLoadEntities:true,  
    synchronize: true, //gera no banco de dados
  }),],

  controllers: [AppController],
  //Providers são provedores de recursos, o service é um tipo de provider pois ele na maioria das vezes será injetado em crontroller.
  //São decorados com injectable para permitir a injeção de dependencia dos mesmos em outras classes.
  providers: [AppService],
})
export class AppModule { }
